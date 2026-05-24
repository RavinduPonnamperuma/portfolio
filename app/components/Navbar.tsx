"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePortfolio } from "@/app/context/PortfolioContext";
import AdminLoginModal from "./AdminLoginModal";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const LOGO_CLICK_WINDOW_MS = 1200;
const LOGO_CLICKS_REQUIRED = 5;

export default function Navbar() {
  const router = useRouter();
  const { data: portfolioData } = usePortfolio();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const adminFromUrl = searchParams.get("admin") === "login";
  const [adminManualOpen, setAdminManualOpen] = useState(false);
  const adminLoginOpen = adminFromUrl || adminManualOpen;
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (logoClickTimer.current) {
      clearTimeout(logoClickTimer.current);
    }

    logoClickCount.current += 1;

    if (logoClickCount.current >= LOGO_CLICKS_REQUIRED) {
      logoClickCount.current = 0;
      event.preventDefault();
      setAdminManualOpen(true);
      return;
    }

    logoClickTimer.current = setTimeout(() => {
      logoClickCount.current = 0;
    }, LOGO_CLICK_WINDOW_MS);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy"
      }`}
      style={{ borderBottom: "1px solid rgba(245, 166, 35, 0.2)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#about"
            onClick={handleLogoClick}
            aria-label={`${portfolioData.personal.fullName} — back to top`}
            className="text-2xl font-bold text-gold tracking-wider hover:opacity-80 transition-opacity select-none"
          >
            {portfolioData.personal.logoInitials}
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm text-text-muted hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-text-light hover:text-gold transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-navy-light border-t border-gold/10"
          >
            <div className="px-4 py-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-sm text-text-muted hover:text-gold transition-colors"
                  style={{ minHeight: "48px", lineHeight: "48px" }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AdminLoginModal
        open={adminLoginOpen}
        onClose={() => {
          setAdminManualOpen(false);
          if (adminFromUrl) {
            router.replace("/");
          }
        }}
      />
    </nav>
  );
}
