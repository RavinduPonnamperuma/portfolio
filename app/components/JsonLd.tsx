import { getSiteUrl, siteConfig } from "@/lib/site";

export default function JsonLd() {
  const siteUrl = getSiteUrl();
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${siteUrl}/#webpage`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": webpageId,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: siteConfig.language,
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url: siteUrl,
        image: `${siteUrl}${siteConfig.ogImage}`,
        email: `mailto:${siteConfig.email}`,
        telephone: siteConfig.phone,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        knowsAbout: siteConfig.knowsAbout,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.locality,
          addressCountry: siteConfig.location.countryCode,
        },
        worksFor: {
          "@type": "Organization",
          name: siteConfig.employer.name,
        },
        sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
