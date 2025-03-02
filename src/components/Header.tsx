"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50 border-b border-amber-600">
      <div>
        <div className="text-xs flex items-center justify-center gap-3 bg-amber-700 px-4 py-1 mt-0">
          <p>136 Broadway, Brooklyn, NY 11249</p>
          <p>718-218-7572</p>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Contact Info */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="text-3xl font-serif h-[70px] flex items-center justify-center"
            >
              Francie
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm uppercase tracking-wider">
              <li>
                <Link
                  href="/menu"
                  className="hover:text-primary transition-colors hover:text-amber-700"
                >
                  Menus
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary transition-colors hover:text-amber-700"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition-colors hover:text-amber-700"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="hover:text-primary transition-colors hover:text-amber-700"
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/private-dining"
                  className="hover:text-primary transition-colors hover:text-amber-700"
                >
                  Private Dining
                </Link>
              </li>

              <li>
                <Link
                  href="https://resy.com/cities/ny/francie"
                  className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/menu"
                  className="block py-2 hover:text-primary transition-colors hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menus
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="block py-2 hover:text-primary transition-colors hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="block py-2 hover:text-primary transition-colors hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="block py-2 hover:text-primary transition-colors hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="/private-dining"
                  className="block py-2 hover:text-primary transition-colors hover:text-amber-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Private Dining
                </Link>
              </li>

              <li>
                <Link
                  href="https://resy.com/cities/ny/francie"
                  className="block py-2 bg-primary text-white px-4 hover:bg-primary/90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
