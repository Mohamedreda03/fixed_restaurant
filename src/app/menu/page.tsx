import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import MenuSection from "@/components/MenuSection";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Francie Brooklyn",
  description:
    "Explore our seasonal menu featuring European influences and locally-sourced ingredients.",
};

// Sample menu data (in a real implementation, this would come from a CMS or API)
const snacks = [
  {
    name: "Roman Army SourDough",
    description: "Sunflower spread, whipped lardo",
    price: "12",
  },
  {
    name: "Crudités",
    description: "Marcona almond, truffle",
    price: "12",
  },
  {
    name: "Soufflé Cakes",
    description: "Seaweed butter, green meyer lemon, caviar",
    price: "23",
  },
  {
    name: "Duck Mortadella",
    description: "Brioche, pistachio mustard",
    price: "20",
  },
  {
    name: "Foie Gras Canelé",
    description: "Earl grey, prune, armagnac",
    price: "15",
  },
];

const shellfish = [
  {
    name: "Oysters",
    description: "Persimmon mignonette",
    price: { single: "15", double: "30" },
  },
  {
    name: "Littleneck Clams",
    description: "Horseradish-parsley juice",
    price: { single: "14", double: "28" },
  },
  {
    name: "Prawns",
    description: "Sauce gribiche",
    price: { single: "20", double: "40" },
  },
];

const appetizers = [
  {
    name: "Beef Carpaccio",
    description: "Smoked egg yolk, pickled mustard seed, horseradish",
    price: "24",
  },
  {
    name: "Roasted Beets",
    description: "Yogurt, pistachio, mint",
    price: "18",
  },
  {
    name: "Grilled Octopus",
    description: "Romesco, preserved lemon, almond",
    price: "26",
  },
  {
    name: "Burrata",
    description: "Seasonal preparation",
    price: "22",
  },
];

const pasta = [
  {
    name: "Tagliatelle",
    description: "Wild mushroom ragù, black truffle",
    price: "32",
  },
  {
    name: "Agnolotti",
    description: "Ricotta, brown butter, sage",
    price: "28",
  },
  {
    name: "Bucatini",
    description: "Pancetta, egg yolk, pecorino",
    price: "26",
  },
];

const mains = [
  {
    name: "Dry-Aged Duck for Two",
    description: "Seasonal accompaniments",
    price: "98",
  },
  {
    name: "Roasted Chicken",
    description: "Potato purée, natural jus",
    price: "38",
  },
  {
    name: "Grilled Ribeye",
    description: "Bone marrow butter, roasted garlic",
    price: "58",
  },
  {
    name: "Whole Roasted Fish",
    description: "Seasonal preparation",
    price: "42",
  },
];

export default function MenuPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Menu"
        subtitle="A seasonal menu featuring European influences and locally-sourced ingredients"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-center mb-12 italic">
              Our menu changes regularly based on the seasons and availability
              of the finest ingredients. Below is a sample of our current
              offerings.
            </p>

            <MenuSection title="Snacks" items={snacks} />
            <MenuSection
              title="Shellfish"
              items={shellfish}
              note="3 or 6 pieces"
            />
            <MenuSection title="Appetizers" items={appetizers} />
            <MenuSection title="Pasta" items={pasta} />
            <MenuSection title="Mains" items={mains} />

            <div className="mt-16 text-center">
              <p className="mb-6 text-lg">
                For reservations or inquiries about our current menu, please
                contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://resy.com/cities/ny/francie"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve a Table
                </a>
                <Link href="/contact" className="btn btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
