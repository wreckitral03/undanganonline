"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Heart } from "lucide-react"

export default function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  // Function to scroll to About Us section
  const scrollToAboutUs = () => {
    const aboutSection = document.getElementById("about-us")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-10 border-t border-pink-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-800">NikahVerse</h2>
            <p className="text-gray-600 mt-1">The Future of Wedding Invitations</p>
          </div>

          {/* Footer Links - Desktop: horizontal, Mobile: vertical */}
          <nav className="w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <li>
                <button
                  onClick={scrollToAboutUs}
                  className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white/50 min-h-[44px] md:min-h-0"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  {language === "id" ? "Tentang Kami" : "About Us"}
                </button>
              </li>
              <li className="hidden md:block w-px h-4 bg-pink-200"></li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white/50 min-h-[44px] md:min-h-0"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li className="hidden md:block w-px h-4 bg-pink-200"></li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-600 hover:text-pink-500 transition-colors flex items-center gap-1 py-2 px-3 rounded-md hover:bg-white/50 min-h-[44px] md:min-h-0"
                >
                  <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                  {t("termsConditions")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-pink-100 text-center text-gray-500 text-sm flex items-center justify-center">
          <span>© {currentYear} NikahVerse • Made with</span>
          <Heart className="h-4 w-4 mx-1 fill-pink-500 text-pink-500" />
          <span>in Indonesia</span>
        </div>
      </div>
    </footer>
  )
}
