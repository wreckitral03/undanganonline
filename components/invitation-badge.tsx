"use client"

import { useLanguage } from "./language-provider"
import { useEffect, useState } from "react"
import { PartyPopper } from "lucide-react"
import { motion } from "framer-motion"

export default function InvitationBadge() {
  const { t } = useLanguage()
  const [count, setCount] = useState(12510)

  // Simulate counter increment for visual effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 10000) // Increment every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center my-12">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl px-6 py-4 text-white shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 text-xl font-bold mb-1">
            <PartyPopper className="h-5 w-5" />
            <span>{count.toLocaleString()}+ Invitations Sent</span>
          </div>
          <p className="text-center text-pink-100 text-sm">Trusted by couples across Indonesia</p>
        </div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-500/20"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </div>
  )
}
