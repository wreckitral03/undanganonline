"use client"

import type React from "react"

import { useLanguage } from "./language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// Mock testimonial data (will be replaced with Strapi CMS data later)
const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial: {
      id: "Undangan digital yang sangat cantik dan profesional. Semua tamu kami terkesan!",
      en: "Very beautiful and professional digital invitation. All our guests were impressed!",
    },
  },
  {
    id: 2,
    name: "Siti Rahayu",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial: {
      id: "Pelayanan cepat dan hasilnya memuaskan. Terima kasih NikahVerse!",
      en: "Fast service and satisfying results. Thank you NikahVerse!",
    },
  },
  {
    id: 3,
    name: "Agus Wijaya",
    image: "/placeholder.svg?height=80&width=80",
    rating: 4,
    testimonial: {
      id: "Desain yang modern dan mudah digunakan. Sangat direkomendasikan!",
      en: "Modern design and easy to use. Highly recommended!",
    },
  },
  {
    id: 4,
    name: "Dewi Lestari",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    testimonial: {
      id: "Harga terjangkau dengan kualitas premium. Puas sekali dengan hasilnya!",
      en: "Affordable price with premium quality. Very satisfied with the results!",
    },
  },
]

export default function TestimonialCarousel() {
  const { t, language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  // Pause autoplay when user interacts with carousel
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false)
    // Resume autoplay after 10 seconds of inactivity
    setTimeout(() => setAutoplay(true), 10000)
  }

  const nextSlide = () => {
    handleManualNavigation((activeIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    handleManualNavigation((activeIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div className="my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">{t("testimonials")}</h2>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-hidden px-4">
          <div className="relative h-[280px] md:h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Card className="border border-pink-100 shadow-lg bg-white rounded-xl overflow-hidden h-full">
                  <CardContent className="p-6 h-full flex flex-col justify-between">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-pink-100 shadow-md">
                        <Image
                          src={testimonials[activeIndex].image || "/placeholder.svg"}
                          alt={testimonials[activeIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-800">{testimonials[activeIndex].name}</h3>
                      <div className="flex items-center my-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.2 }}
                          >
                            <Star
                              className={`h-4 w-4 ${
                                i < testimonials[activeIndex].rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-600 italic">"{testimonials[activeIndex].testimonial[language]}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border-pink-100 z-10"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 text-pink-500" />
          <span className="sr-only">Previous</span>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full shadow-md border-pink-100 z-10"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4 text-pink-500" />
          <span className="sr-only">Next</span>
        </Button>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-110" : "bg-gray-300"
              }`}
              onClick={() => handleManualNavigation(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
