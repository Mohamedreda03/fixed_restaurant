import MainLayout from "@/components/MainLayout";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location & Hours | Francie Brooklyn",
  description:
    "Visit Francie at 136 Broadway, Brooklyn, NY. Open Monday through Saturday for dinner.",
};

export default function LocationPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Location & Hours"
        subtitle="Visit us in the heart of Brooklyn"
        backgroundImage="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours & Contact */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Hours</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-medium">Monday - Thursday</h3>
                  <p>5:30 PM - 10:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium">Friday - Saturday</h3>
                  <p>5:00 PM - 10:30 PM</p>
                </div>
                <div>
                  <h3 className="font-medium">Sunday</h3>
                  <p>Closed</p>
                </div>
              </div>

              <h2 className="text-2xl font-serif mb-6">Contact</h2>
              <div className="space-y-2 mb-8">
                <p>136 Broadway</p>
                <p>Brooklyn, NY 11249</p>
                <p className="mt-4">718-218-7572</p>
                <p>info@franciebrooklyn.com</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Map & Directions */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Location</h2>
              <div className="bg-muted h-[400px] mb-6 rounded-lg overflow-hidden">
                {/* In a real implementation, this would be a Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-73.96430492346016!3d40.71096597139282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bdf67004cb5%3A0x33b5d30824621c4!2s136%20Broadway%2C%20Brooklyn%2C%20NY%2011249!5e0!3m2!1sen!2sus!4v1647887674452!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Francie Brooklyn Location"
                ></iframe>
              </div>

              <h3 className="text-xl font-serif mb-4">Directions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">By Subway</h4>
                  <p>
                    Take the J, M, or Z train to Marcy Avenue, or the L train to
                    Bedford Avenue.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">By Car</h4>
                  <p>
                    Limited street parking is available. There are also several
                    parking garages in the area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif mb-8 text-center">Need to Know</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p>
              Francie takes reservations up to 30 days in advance. We regret we
              are unable to take reservations by email, although if you are
              super sweet, you can try. You may book through the link on our
              website or call 718.218.7572.
            </p>
            <p>
              We answer our phone starting at 2pm, Monday through Saturday. Read
              that again, we answer our phone. Some restaurants don&apos;t even
              have a phone. We name no names, it takes all kinds to make a
              world.
            </p>
            <p>
              Francie does not allow strollers, prams, or e-scooters in the
              restaurant, nor will we store them for you. No outside food or
              beverages will be allowed in the restaurant, including cakes.
            </p>
            <p>
              Our corkage fee is $90 per bottle, at one bottle per two persons,
              two bottles maximum. On Mondays we discount every bottle on our
              wine list, just because we can.
            </p>
            <p>
              When you dine at Francie, you do not dine in a bubble. Please be
              respectful of other diners and the rules of decorum and refrain
              from using flash photography, bright lights, laptops, and/or
              filming. Our staff are here to serve but they are not stars in
              your social media feed. Please do not photograph or film them
              without permission. When in doubt, ask.
            </p>
            <p>
              Francie technically does not have a dress code but if you could
              kindly dress for success, whatever you take that to mean, we (and
              the other diners) would appreciate it.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
