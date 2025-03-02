import MainLayout from "@/components/MainLayout";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Welcome to Francie</h2>
              <p className="mb-4">
                Francie is a Michelin-starred restaurant in Brooklyn, NY,
                offering a seasonal menu with European influences in a warm,
                sophisticated setting.
              </p>
              <p className="mb-6">
                Our menu changes with the seasons, highlighting the best
                ingredients from local farmers, fishermen, and purveyors. We
                focus on thoughtful, technique-driven cooking and warm, genuine
                hospitality.
              </p>
              <Link href="/about" className="btn btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Francie interior"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center">
            Menu Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="relative h-64 mb-4 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Signature dish"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Dry-Aged Duck</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Our signature dry-aged crown of duck for two, served with
                seasonal accompaniments.
              </p>
              <p className="font-medium">$98</p>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="relative h-64 mb-4 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                  alt="Pasta dish"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Handmade Pasta</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Fresh pasta made in-house daily, with seasonal sauces and
                ingredients.
              </p>
              <p className="font-medium">$32</p>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-muted p-6 rounded-lg">
              <div className="relative h-64 mb-4 rounded overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1078&q=80"
                  alt="Dessert"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-serif mb-2">Seasonal Dessert</h3>
              <p className="text-sm text-foreground/80 mb-4">
                Rotating selection of desserts featuring seasonal fruits and
                house-made ice creams.
              </p>
              <p className="font-medium">$16</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/menu" className="btn btn-secondary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6">Make a Reservation</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join us for dinner Monday through Saturday. We take reservations up
            to 30 days in advance.
          </p>
          <a
            href="https://resy.com/cities/ny/francie"
            className="btn bg-white text-primary hover:bg-white/90 border border-white hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reserve a Table
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
