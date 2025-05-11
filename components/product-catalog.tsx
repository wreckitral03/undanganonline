"use client"

import { useLanguage } from "./language-provider"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./product-card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import CategoryFilter from "./category-filter"

// Mock product data (will be replaced with Strapi CMS data later)
const products = [
  {
    id: "INV001",
    title: "Elegant Floral",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 99000,
    discountedPrice: 59000,
    previewUrl: "https://example.com/preview/elegant-floral",
    category: "Elegant",
    bestSeller: true,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/elegant-floral",
      tiktok: null,
      tokopedia: "https://tokopedia.com/product/elegant-floral",
    },
  },
  {
    id: "INV002",
    title: "Rustic Garden",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 129000,
    discountedPrice: 79000,
    previewUrl: "https://example.com/preview/rustic-garden",
    category: "Rustic",
    bestSeller: false,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/rustic-garden",
      tiktok: "https://tiktok.com/shop/rustic-garden",
      tokopedia: null,
    },
  },
  {
    id: "INV003",
    title: "Modern Minimalist",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 149000,
    discountedPrice: 89000,
    previewUrl: "https://example.com/preview/modern-minimalist",
    category: "Modern",
    bestSeller: true,
    checkoutLinks: {
      shopee: null,
      tiktok: "https://tiktok.com/shop/modern-minimalist",
      tokopedia: "https://tokopedia.com/product/modern-minimalist",
    },
  },
  {
    id: "INV004",
    title: "Golden Luxury",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 199000,
    discountedPrice: 119000,
    previewUrl: "https://example.com/preview/golden-luxury",
    category: "Premium",
    bestSeller: true,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/golden-luxury",
      tiktok: "https://tiktok.com/shop/golden-luxury",
      tokopedia: "https://tokopedia.com/product/golden-luxury",
    },
  },
  {
    id: "INV005",
    title: "Sweet Watercolor",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 89000,
    discountedPrice: 49000,
    previewUrl: "https://example.com/preview/sweet-watercolor",
    category: "Artistic",
    bestSeller: false,
    checkoutLinks: {
      shopee: null,
      tiktok: "https://tiktok.com/shop/sweet-watercolor",
      tokopedia: "https://tokopedia.com/product/sweet-watercolor",
    },
  },
  {
    id: "INV006",
    title: "Tropical Paradise",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 119000,
    discountedPrice: 69000,
    previewUrl: "https://example.com/preview/tropical-paradise",
    category: "Tropical",
    bestSeller: false,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/tropical-paradise",
      tiktok: null,
      tokopedia: "https://tokopedia.com/product/tropical-paradise",
    },
  },
  {
    id: "INV007",
    title: "Vintage Romance",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 139000,
    discountedPrice: 89000,
    previewUrl: "https://example.com/preview/vintage-romance",
    category: "Vintage",
    bestSeller: false,
    checkoutLinks: {
      shopee: null,
      tiktok: "https://tiktok.com/shop/vintage-romance",
      tokopedia: "https://tokopedia.com/product/vintage-romance",
    },
  },
  {
    id: "INV008",
    title: "Bohemian Dream",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 159000,
    discountedPrice: 99000,
    previewUrl: "https://example.com/preview/bohemian-dream",
    category: "Bohemian",
    bestSeller: true,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/bohemian-dream",
      tiktok: "https://tiktok.com/shop/bohemian-dream",
      tokopedia: null,
    },
  },
  {
    id: "INV009",
    title: "Marble Elegance",
    image: "/placeholder.svg?height=400&width=300",
    originalPrice: 179000,
    discountedPrice: 109000,
    previewUrl: "https://example.com/preview/marble-elegance",
    category: "Elegant",
    bestSeller: false,
    checkoutLinks: {
      shopee: "https://shopee.co.id/product/marble-elegance",
      tiktok: "https://tiktok.com/shop/marble-elegance",
      tokopedia: "https://tokopedia.com/product/marble-elegance",
    },
  },
]

const ITEMS_PER_PAGE = 6

export default function ProductCatalog() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Get unique categories from products
  const categories = Array.from(new Set(products.map((product) => product.category)))

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)

  // Get current page products
  const currentProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to catalog top
    document.getElementById("product-catalog")?.scrollIntoView({ behavior: "smooth" })
  }

  // Handle category selection
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1) // Reset to first page on category change
  }

  return (
    <div className="my-16" id="product-catalog">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">{t("ourProducts")}</h2>

      <div className="relative max-w-md mx-auto mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <Input
          type="text"
          placeholder={t("search")}
          className="pl-10 border-pink-200 focus:border-pink-500 focus:ring-pink-500 rounded-lg shadow-sm"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Reset to first page on search
          }}
        />
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentPage}-${selectedCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching your criteria.</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-10 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-9 w-9 rounded-full border-pink-200"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous Page</span>
          </Button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
                className={`h-9 w-9 rounded-full ${
                  currentPage === page ? "bg-gradient-to-r from-pink-500 to-purple-600" : "border-pink-200"
                }`}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-9 w-9 rounded-full border-pink-200"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next Page</span>
          </Button>
        </div>
      )}
    </div>
  )
}
