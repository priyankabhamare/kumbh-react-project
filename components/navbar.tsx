"use client";

import React from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium transition-colors rounded-md
        ${isActive 
          ? "text-primary bg-primary/10" 
          : "text-foreground/80 hover:text-primary hover:bg-muted"
        }
      `}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Kumbh" },
    { href: "/events", label: "Shahi Snan Dates" },
    { href: "/nearby-places", label: "Places to Visit" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground overflow-hidden">
  <div className="max-w-6xl mx-auto px-4 py-2 text-sm">
    <div className="flex animate-marquee whitespace-nowrap min-w-full">
      <span className="mx-8 font-semibold">
        🔱 Welcome to Nashik Kumbh Mela 2027– A Sacred Journey of Faith, Devotion & Unity 🔱
      </span>
      </div>
  </div>
</div>


      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-xl">ॐ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">
                 Kumbh Mitra
              </span>
          </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
