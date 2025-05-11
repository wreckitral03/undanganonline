"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type CategoryFilterProps = {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const { t } = useLanguage()

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 mb-3 text-center">{t("categoryFilter")}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectCategory(null)}
            className={`rounded-full ${
              selectedCategory === null ? "bg-gradient-to-r from-pink-500 to-purple-600" : "border-pink-200"
            }`}
          >
            {t("allCategories")}
          </Button>
        </motion.div>

        {categories.map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onSelectCategory(category)}
              className={`rounded-full ${
                selectedCategory === category ? "bg-gradient-to-r from-pink-500 to-purple-600" : "border-pink-200"
              }`}
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
