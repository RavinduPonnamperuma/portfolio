import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ravindu Damith Ponnamperuma | IT Coordinator & Software Developer",
  description:
    "Portfolio of Ravindu Damith Ponnamperuma — IT Coordinator & Software Developer specializing in Angular, NestJS, TypeScript, and full-stack web development. Based in Sri Lanka.",
  keywords: [
    "Ravindu Damith Ponnamperuma",
    "Software Developer",
    "IT Coordinator",
    "Full-Stack Developer",
    "Angular",
    "NestJS",
    "TypeScript",
    "Sri Lanka",
  ],
  authors: [{ name: "Ravindu Damith Ponnamperuma" }],
  openGraph: {
    title: "Ravindu Damith Ponnamperuma | Portfolio",
    description:
      "IT Coordinator & Software Developer — Angular, NestJS, TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
