"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Store } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "/search" },
  { name: "Businesses", href: "/search" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-yellow-500/20 bg-black/80 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-extrabold tracking-widest"
        >
          <Store className="h-8 w-8 text-yellow-400" />
          <span className="gold-text">STALL</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white transition duration-300 hover:text-yellow-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login">
            <button className="btn-outline">
              Login
            </button>
          </Link>

          <Link href="/register">
            <button className="btn-primary">
              Register Shop
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-yellow-500/20 bg-black lg:hidden">
          <div className="container flex flex-col gap-4 py-6">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg transition hover:text-yellow-400"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
            >
              <button className="btn-outline w-full">
                Login
              </button>
            </Link>

            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
            >
              <button className="btn-primary w-full">
                Register Shop
              </button>
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
