import Header from "@/components/header"
import InvitationBadge from "@/components/invitation-badge"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ProductCatalog from "@/components/product-catalog"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-1">
        <InvitationBadge />
        <TestimonialCarousel />
        <div id="about-us"></div> {/* This is where the About Us section would be */}
        <ProductCatalog />
      </div>
      <Footer />
    </main>
  )
}
