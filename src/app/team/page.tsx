import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Francie Brooklyn",
  description:
    "Meet the talented team behind Francie, a Michelin-starred restaurant in Brooklyn.",
};

// Sample team data with Unsplash images
const teamMembers = [
  {
    name: "John Doe",
    role: "Executive Chef",
    bio: "With over 20 years of culinary experience, John brings a wealth of knowledge and creativity to Francie. His passion for seasonal ingredients and classic techniques forms the foundation of our menu.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Jane Smith",
    role: "Pastry Chef",
    bio: "Jane&apos;s innovative approach to desserts combines traditional pastry techniques with unexpected flavors. Her creations are the perfect finale to the Francie dining experience.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Robert Johnson",
    role: "Wine Director",
    bio: "Robert&apos;s extensive knowledge of wines from around the world ensures the perfect pairing for every dish. His curated wine list showcases both established producers and exciting newcomers.",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=677&q=80",
  },
  {
    name: "Sarah Williams",
    role: "General Manager",
    bio: "Sarah oversees all aspects of the dining experience at Francie. Her attention to detail and commitment to hospitality ensures that every guest feels welcome and well-cared for.",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  },
];

export default function TeamPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Our Team"
        subtitle="Meet the talented individuals behind Francie"
        backgroundImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              Our team is passionate about creating exceptional dining
              experiences. From the kitchen to the dining room, each member
              brings their unique talents and dedication to Francie.
            </p>

            <div className="space-y-16">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif mb-2">{member.name}</h2>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p>{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-serif mb-6">Join Our Team</h2>
              <p className="mb-8">
                We&apos;re always looking for passionate, talented individuals
                to join our team. If you&apos;re interested in being part of
                Francie, please send your resume to careers@franciebrooklyn.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
