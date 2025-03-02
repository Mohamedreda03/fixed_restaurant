import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Francie Brooklyn",
  description:
    "Learn about Francie, a Michelin-starred restaurant in Brooklyn offering a seasonal menu with European influences.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <PageHeader
        title="About Francie"
        subtitle="A Michelin-starred restaurant in the heart of Brooklyn"
        backgroundImage="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8">
              Francie is a Michelin-starred restaurant in Brooklyn, NY, offering
              a seasonal menu with European influences in a warm, sophisticated
              setting.
            </p>

            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Francie interior"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="mb-6">
              Francie opened in 2020 in the historic Williamsburg Savings Bank
              building. Named after the protagonist of &quot;A Tree Grows in
              Brooklyn,&quot; Francie embodies the resilience and character of
              its Brooklyn home.
            </p>
            <p className="mb-8">
              Our menu changes with the seasons, highlighting the best
              ingredients from local farmers, fishermen, and purveyors. We focus
              on thoughtful, technique-driven cooking and warm, genuine
              hospitality.
            </p>

            <h2 className="text-2xl font-serif mb-4">Our Philosophy</h2>
            <p className="mb-6">
              At Francie, we believe in the power of a great meal to bring
              people together. Our approach to dining combines classic
              techniques with contemporary sensibilities, creating an experience
              that is both familiar and exciting.
            </p>
            <p className="mb-8">
              We are committed to sustainability and supporting local producers,
              ensuring that our ingredients are not only delicious but
              responsibly sourced.
            </p>

            <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Francie team"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <h2 className="text-2xl font-serif mb-4">Recognition</h2>
            <p className="mb-6">
              Francie was awarded a Michelin star in 2021, a testament to our
              team&apos;s dedication to excellence. We are honored by this
              recognition and remain committed to providing an exceptional
              dining experience for all our guests.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
