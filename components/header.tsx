"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function Header() {
  const { t, toggleLanguage } = useLanguage()

  return (
    <header className="bg-gradient-to-r from-pink-400 via-purple-500 to-pink-500 text-white py-8 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">NikahVerse</h1>
            <p className="mt-2 text-pink-100 font-light text-lg">
              The Future of Wedding Invitations. Digitally Beautiful.
            </p>
          </div>
          <Button
            variant="outline"
            onClick={toggleLanguage}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <Globe className="mr-2 h-4 w-4" />
            {t("languageToggle")}
          </Button>
        </div>
      </div>
    </header>
  )
}
