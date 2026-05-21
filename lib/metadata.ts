import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "./portfolio-data";

export function buildMetadata(): Metadata {
  const siteUrl = getSiteUrl();
  const ogImageUrl = `${siteUrl}${siteConfig.ogImage}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteUrl,
      siteName: siteConfig.shortName,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: ogImageUrl,
          width: 900,
          height: 1200,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [ogImageUrl],
    },
    icons: {
      icon: "/favicon.ico",
      apple: "/images/profile.png",
    },
    other: {
      "geo.region": siteConfig.location.countryCode,
      "geo.placename": siteConfig.location.locality,
    },
  };
}
