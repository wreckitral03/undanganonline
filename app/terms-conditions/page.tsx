"use client"

import { useLanguage } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsConditions() {
  const { language } = useLanguage()

  // Content based on selected language
  const content =
    language === "id" ? (
      <>
        <h1 className="text-3xl font-bold mb-6">Syarat & Ketentuan</h1>
        <div className="prose max-w-none">
          <p>Terakhir diperbarui: 11 Mei 2023</p>

          <h2>1. Penerimaan Syarat</h2>
          <p>
            Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
            Jika Anda tidak setuju dengan bagian apa pun dari syarat ini, Anda tidak boleh mengakses layanan.
          </p>

          <h2>2. Perubahan pada Syarat</h2>
          <p>
            Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti syarat ini kapan saja. Jika
            perubahan bersifat material, kami akan berusaha memberikan pemberitahuan setidaknya 30 hari sebelum syarat
            baru berlaku.
          </p>

          <h2>3. Akun Anda</h2>
          <p>
            Saat Anda membuat akun dengan kami, Anda harus memberikan informasi yang akurat, lengkap, dan terkini setiap
            saat. Kegagalan untuk melakukannya merupakan pelanggaran terhadap Syarat, yang dapat mengakibatkan
            penghentian segera akun Anda.
          </p>

          <h2>4. Kekayaan Intelektual</h2>
          <p>
            Layanan dan kontennya, termasuk tetapi tidak terbatas pada teks, grafik, logo, ikon, gambar, klip audio,
            unduhan digital, dan kompilasi data, adalah milik kami atau pemberi lisensi kami dan dilindungi oleh hukum
            hak cipta Indonesia dan internasional.
          </p>

          <h2>5. Penghentian</h2>
          <p>
            Kami dapat menghentikan atau menangguhkan akses Anda segera, tanpa pemberitahuan sebelumnya atau kewajiban,
            untuk alasan apa pun, termasuk tanpa batasan jika Anda melanggar Syarat.
          </p>

          <h2>6. Batasan Tanggung Jawab</h2>
          <p>
            Dalam keadaan apa pun kami tidak akan bertanggung jawab atas kerugian tidak langsung, insidental, khusus,
            konsekuensial, atau hukuman, termasuk kehilangan keuntungan, pendapatan, data, atau penggunaan, yang timbul
            dari atau terkait dengan penggunaan Anda atas layanan.
          </p>

          <h2>7. Hukum yang Berlaku</h2>
          <p>
            Syarat ini akan diatur dan ditafsirkan sesuai dengan hukum Indonesia, tanpa memperhatikan ketentuan konflik
            hukumnya.
          </p>
        </div>
      </>
    ) : (
      <>
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <div className="prose max-w-none">
          <p>Last updated: May 11, 2023</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our services, you agree to be bound by these terms and conditions. If you disagree
            with any part of the terms, you may not access the service.
          </p>

          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is
            material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>3. Your Account</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at
            all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
            your account.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property
            of us and our licensors and are protected by Indonesian and international copyright laws.
          </p>

          <h2>5. Termination</h2>
          <p>
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason
            whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall we be liable for any indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting
            from or related to your use of the service.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Indonesia, without regard to its
            conflict of law provisions.
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
