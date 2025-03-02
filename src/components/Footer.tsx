import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif mb-4">Francie</h3>
            <address className="not-italic">
              <p>136 Broadway</p>
              <p>Brooklyn, NY 11249</p>
              <p className="mt-2">718-218-7572</p>
              <p>info@franciebrooklyn.com</p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-serif mb-4">Hours</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium">Monday - Thursday:</span>
                <br />
                5:30 PM - 10:00 PM
              </p>
              <p>
                <span className="font-medium">Friday - Saturday:</span>
                <br />
                5:00 PM - 10:30 PM
              </p>
              <p>
                <span className="font-medium">Sunday:</span>
                <br />
                Closed
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-serif mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-primary transition-colors"
                >
                  Menus
                </Link>
              </li>
              <li>
                <Link
                  href="/private-dining"
                  className="hover:text-primary transition-colors"
                >
                  Private Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <a
                  href="https://resy.com/cities/ny/francie"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media and Newsletter */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/franciebrooklyn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
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
              className="hover:text-primary transition-colors"
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

          <div>
            <p className="text-sm">
              &copy; {currentYear} Francie Brooklyn. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
