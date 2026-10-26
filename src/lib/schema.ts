import { SITE, SOCIALS } from "@consts";

const ORIGIN = "https://tomlowndes.co.uk";

export const PERSON_ID = `${ORIGIN}/#person`;
export const ORG_ID = `${ORIGIN}/#organization`;

const sameAs = SOCIALS.map((s) => s.HREF);

// Site-wide entities, emitted on every page
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.NAME,
      url: `${ORIGIN}/`,
      image: `${ORIGIN}/tom-headshot.jpg`,
      jobTitle: "Creative designer",
      address: { "@type": "PostalAddress", addressLocality: "Cannock", addressRegion: "Staffordshire", addressCountry: "GB" },
      sameAs,
    },
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.NAME,
      url: `${ORIGIN}/`,
      logo: `${ORIGIN}/og-default.png`,
      founder: { "@id": PERSON_ID },
      address: { "@type": "PostalAddress", addressLocality: "Cannock", addressRegion: "Staffordshire", addressCountry: "GB" },
      sameAs,
    },
  ],
};

// Blog posts use BlogPosting; pages without a publish date (Uses) use a plain WebPage
export function articleSchema(opts: { type?: string; url: string; headline: string; description: string; image: string; published?: Date; about?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type ?? "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    ...(opts.published && { datePublished: opts.published.toISOString(), dateModified: opts.published.toISOString() }),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: opts.url,
    ...(opts.about && { about: { "@type": "Thing", name: opts.about } }),
  };
}
