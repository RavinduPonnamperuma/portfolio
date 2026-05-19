"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 text-center">
          <p className="text-xs sm:text-sm text-text-muted">
            © {year} Designed & Built by{" "}
            <span className="text-gold font-medium">Ravindu Damith</span>
          </p>
          <p className="text-xs sm:text-sm text-text-muted hidden sm:block">
            •
          </p>
          <p className="text-xs sm:text-sm text-text-muted">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
