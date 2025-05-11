"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink, MessageSquare, ShoppingCart, ShoppingBag, Store } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

type ProductProps = {
  product: {
    id: string
    title: string
    image: string
    originalPrice: number
    discountedPrice: number
    previewUrl: string
    category: string
    bestSeller: boolean
    checkoutLinks: {
      shopee: string | null
      tiktok: string | null
      tokopedia: string | null
    }
  }
}

export default function ProductCard({ product }: ProductProps) {
  const { t, language } = useLanguage()

  // Format currency based on language
  const formatCurrency = (amount: number) => {
    return language === "id" ? `Rp ${amount.toLocaleString("id-ID")}` : `IDR ${amount.toLocaleString("en-US")}`
  }

  // Generate WhatsApp message with product details
  const generateWhatsAppMessage = () => {
    const message =
      language === "id"
        ? `Halo, saya tertarik dengan undangan "${product.title}" (ID: ${product.id}). Boleh info lebih lanjut?`
        : `Hello, I'm interested in the "${product.title}" invitation (ID: ${product.id}). Can I get more information?`

    return `https://wa.me/628123456789?text=${encodeURIComponent(message)}`
  }

  // Handle marketplace button click
  const handleMarketplaceClick = (url: string | null) => {
    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg rounded-xl border-pink-100 h-full flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Math.round(((product.originalPrice - product.discountedPrice) / product.originalPrice) * 100)}% OFF
          </span>
        </div>

        {product.bestSeller && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 px-2 py-1 font-semibold">
              Best Seller
            </Badge>
          </div>
        )}

        <div className="absolute bottom-3 left-3">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm text-gray-700 border-0">
            {product.category}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.title}</h3>

        <div className="flex items-center mb-4">
          <span className="text-gray-400 line-through mr-2 text-sm">{formatCurrency(product.originalPrice)}</span>
          <motion.span className="text-pink-600 font-bold" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
            {formatCurrency(product.discountedPrice)}
          </motion.span>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          <Button
            variant="outline"
            className="justify-start rounded-lg border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
            onClick={() => window.open(product.previewUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4 text-pink-500" />
            <span>{t("viewInvitation")}</span>
          </Button>

          <Button
            variant="outline"
            className="justify-start rounded-lg border-pink-200 hover:border-pink-500 hover:bg-pink-50 transition-all duration-300"
            onClick={() => window.open(generateWhatsAppMessage(), "_blank")}
          >
            <MessageSquare className="mr-2 h-4 w-4 text-pink-500" />
            <span>{t("contactUs")}</span>
          </Button>

          <div className="grid grid-cols-3 gap-2 mt-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={product.checkoutLinks.shopee ? "default" : "outline"}
                    size="sm"
                    className={`rounded-lg ${
                      product.checkoutLinks.shopee
                        ? "bg-[#ee4d2d] hover:bg-[#d23f1d] text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                    }`}
                    onClick={() => handleMarketplaceClick(product.checkoutLinks.shopee)}
                    disabled={!product.checkoutLinks.shopee}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{product.checkoutLinks.shopee ? "Shopee" : "Not available on Shopee"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={product.checkoutLinks.tiktok ? "default" : "outline"}
                    size="sm"
                    className={`rounded-lg ${
                      product.checkoutLinks.tiktok
                        ? "bg-black hover:bg-gray-800 text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                    }`}
                    onClick={() => handleMarketplaceClick(product.checkoutLinks.tiktok)}
                    disabled={!product.checkoutLinks.tiktok}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{product.checkoutLinks.tiktok ? "TikTok" : "Not available on TikTok"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={product.checkoutLinks.tokopedia ? "default" : "outline"}
                    size="sm"
                    className={`rounded-lg ${
                      product.checkoutLinks.tokopedia
                        ? "bg-[#42b549] hover:bg-[#39a03f] text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100"
                    }`}
                    onClick={() => handleMarketplaceClick(product.checkoutLinks.tokopedia)}
                    disabled={!product.checkoutLinks.tokopedia}
                  >
                    <Store className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{product.checkoutLinks.tokopedia ? "Tokopedia" : "Not available on Tokopedia"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
