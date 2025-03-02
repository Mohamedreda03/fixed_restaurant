import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Francie Brooklyn",
  description:
    "Get in touch with Francie Brooklyn for reservations, private dining inquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <p className="mb-8">
                For reservations, private dining inquiries, or general
                questions, please don&apos;t hesitate to contact us. We strive
                to respond to all inquiries within 24-48 hours.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-lg font-medium mb-2">Address</h3>
                  <p>136 Broadway</p>
                  <p>Brooklyn, NY 11249</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Phone</h3>
                  <p>718-218-7572</p>
                  <p className="text-sm text-foreground/70 mt-1">
                    We answer our phone starting at 2pm, Monday through
                    Saturday.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <p>info@franciebrooklyn.com</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Hours</h3>
                  <p>Monday - Thursday: 5:30 PM - 10:00 PM</p>
                  <p>Friday - Saturday: 5:00 PM - 10:30 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/franciebrooklyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/franciebrooklyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
