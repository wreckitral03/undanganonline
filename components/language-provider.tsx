"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "id" | "en"

type Translations = {
  [key: string]: {
    id: string
    en: string
  }
}

// Define all translations here
export const translations: Translations = {
  brandName: {
    id: "Undangan Digital",
    en: "Digital Invitation",
  },
  brandDescription: {
    id: "Platform undangan pernikahan digital terbaik di Indonesia",
    en: "The best digital wedding invitation platform in Indonesia",
  },
  totalInvitations: {
    id: "Total Undangan Dibuat",
    en: "Total Invitations Created",
  },
  testimonials: {
    id: "Testimoni Pelanggan",
    en: "Customer Testimonials",
  },
  ourProducts: {
    id: "Katalog Produk Kami",
    en: "Our Product Catalog",
  },
  search: {
    id: "Cari template...",
    en: "Search templates...",
  },
  viewInvitation: {
    id: "Lihat Undangan",
    en: "View Invitation",
  },
  contactUs: {
    id: "Hubungi Kami",
    en: "Contact Us",
  },
  buyOnShopee: {
    id: "Beli di Shopee",
    en: "Buy on Shopee",
  },
  newTabWarning: {
    id: "Akan membuka halaman baru",
    en: "Will open in a new page",
  },
  privacyPolicy: {
    id: "Kebijakan Privasi",
    en: "Privacy Policy",
  },
  termsConditions: {
    id: "Syarat & Ketentuan",
    en: "Terms & Conditions",
  },
  languageToggle: {
    id: "English",
    en: "Bahasa",
  },
  from: {
    id: "Dari",
    en: "From",
  },
  to: {
    id: "Menjadi",
    en: "To",
  },
  categoryFilter: {
    id: "Filter Kategori",
    en: "Category Filter",
  },
  allCategories: {
    id: "Semua",
    en: "All",
  },
  bestSeller: {
    id: "Terlaris",
    en: "Best Seller",
  },
  notAvailable: {
    id: "Tidak tersedia",
    en: "Not available",
  },
}

type LanguageContextType = {
  language: Language
  t: (key: string) => string
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  // Function to translate text based on current language
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
  }

  // Toggle between languages
  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id")
  }

  return <LanguageContext.Provider value={{ language, t, toggleLanguage }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
