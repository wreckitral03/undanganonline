"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  const { language } = useLanguage()

  // Content based on selected language
  const content =
    language === "id" ? (
      <>
        <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi</h1>
        <div className="prose max-w-none">
          <p>Terakhir diperbarui: 11 Mei 2023</p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami ketika Anda menggunakan layanan
            kami, seperti saat Anda membuat akun, membeli produk, atau menghubungi dukungan pelanggan.
          </p>

          <h2>2. Bagaimana Kami Menggunakan Informasi Anda</h2>
          <p>
            Kami menggunakan informasi yang kami kumpulkan untuk menyediakan, memelihara, dan meningkatkan layanan kami,
            termasuk untuk memproses transaksi, mengirim pemberitahuan terkait akun Anda, dan menanggapi permintaan
            Anda.
          </p>

          <h2>3. Berbagi Informasi</h2>
          <p>
            Kami tidak menjual informasi pribadi Anda kepada pihak ketiga. Kami dapat membagikan informasi Anda dengan
            penyedia layanan pihak ketiga yang membantu kami dalam menjalankan bisnis kami.
          </p>

          <h2>4. Keamanan</h2>
          <p>
            Kami mengambil langkah-langkah yang wajar untuk membantu melindungi informasi tentang Anda dari kehilangan,
            pencurian, penyalahgunaan, dan akses, pengungkapan, perubahan, dan penghancuran yang tidak sah.
          </p>

          <h2>5. Perubahan Kebijakan Ini</h2>
          <p>
            Kami dapat mengubah kebijakan privasi ini dari waktu ke waktu. Jika kami membuat perubahan, kami akan
            memberi tahu Anda dengan merevisi tanggal di bagian atas kebijakan.
          </p>

          <h2>6. Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di:
            <a href="mailto:info@undangandigital.com" className="text-pink-500 hover:underline">
              info@undangandigital.com
            </a>
          </p>
        </div>
      </>
    ) : (
      <>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: May 11, 2023</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us when you use our services, such as when you create an
            account, purchase a product, or contact customer support.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, including to process
            transactions, send notifications related to your account, and respond to your requests.
          </p>

          <h2>3. Sharing Information</h2>
          <p>
            We do not sell your personal information to third parties. We may share your information with third-party
            service providers who help us run our business.
          </p>

          <h2>4. Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized
            access, disclosure, alteration, and destruction.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may change this privacy policy from time to time. If we make changes, we will notify you by revising the
            date at the top of the policy.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at:
            <a href="mailto:info@digitalinvitation.com" className="text-pink-500 hover:underline">
              info@digitalinvitation.com
            </a>
          </p>
        </div>
      </>
    )

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
          </Button>
        </Link>

        {content}
      </div>
      <Footer />
    </main>
  )
}
