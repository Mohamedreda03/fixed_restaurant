import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Dining | Francie Brooklyn",
  description:
    "Host your next special event at Francie. Our private dining room offers an intimate setting for celebrations and corporate gatherings.",
};

export default function PrivateDiningPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Private Dining"
        subtitle="Host your next special event at Francie"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-6">The Vault at Francie</h2>
              <p className="mb-4">
                Our private dining room, The Vault, offers an intimate setting
                for special celebrations, corporate gatherings, and other
                private events. With its elegant design and warm ambiance, The
                Vault provides the perfect backdrop for memorable occasions.
              </p>
              <p className="mb-6">
                The Vault can accommodate up to 14 guests for a seated dinner.
                Our team will work with you to create a customized menu that
                showcases our seasonal offerings and meets your specific needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Capacity: Up to 14 guests
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Customized menus
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Wine pairings available
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Private service staff
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="The Vault private dining room"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif mb-6 text-center">
              Sample Private Dining Menu
            </h2>
            <div className="bg-muted p-8 rounded-lg mb-12">
              <h3 className="text-xl font-serif mb-4 text-center">
                Four-Course Menu
              </h3>

              <div className="mb-6">
                <h4 className="font-medium mb-2">First Course (choice of)</h4>
                <ul className="space-y-2">
                  <li>Seasonal Salad with local greens and vinaigrette</li>
                  <li>Beef Carpaccio with smoked egg yolk and horseradish</li>
                  <li>Burrata with seasonal accompaniments</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Second Course (choice of)</h4>
                <ul className="space-y-2">
                  <li>Handmade Pasta with seasonal preparation</li>
                  <li>Seared Scallops with cauliflower and brown butter</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Main Course (choice of)</h4>
                <ul className="space-y-2">
                  <li>Dry-Aged Duck for the table</li>
                  <li>Roasted Chicken with potato purée</li>
                  <li>Grilled Fish with seasonal vegetables</li>
                  <li>Vegetarian option available upon request</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Dessert (choice of)</h4>
                <ul className="space-y-2">
                  <li>Seasonal Fruit Dessert</li>
                  <li>Chocolate Tart</li>
                  <li>Selection of Cheeses</li>
                </ul>
              </div>

              <p className="text-center mt-8 text-sm italic">
                Menu items subject to change based on seasonality and
                availability. Wine pairings available for an additional cost.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-serif mb-6">
                Book Your Private Event
              </h2>
              <p className="mb-8">
                To inquire about private dining at Francie, please contact us
                with your preferred date, group size, and any special requests.
                We recommend booking at least 2-4 weeks in advance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
                <a
                  href="mailto:events@franciebrooklyn.com"
                  className="btn btn-secondary"
                >
                  Email Events Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
