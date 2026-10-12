import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tom Lowndes",
  EMAIL: "info@tomlowndes.co.uk",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Tom Lowndes | Creative designer",
  DESCRIPTION: "Creative designer in Staffordshire, open to remote and in-house design roles. Portfolio, field notes and experience.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Field notes on designing systems for an AuDHD brain, friction-free everyday carry, self-hosted hardware and calm technology.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Selected design work: brand systems, print production, digital interfaces and the case studies behind them.",
};

export const USES: Metadata = {
  TITLE: "Uses",
  DESCRIPTION: "A living index of the physical hardware, everyday carry, digital tools, and self-hosted infrastructure I use daily.",
};

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "What I'm focused on right now.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch about design roles, freelance work or collaborations.",
};

// Web3Forms access key. Public by design: it only lets the form send to the inbox it was created for.
export const WEB3FORMS_KEY = "REPLACE_WITH_WEB3FORMS_KEY";

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Senior creative and multimedia designer with 13+ years across brand, print, packaging, digital and video. CV and portfolio downloads.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "mastodon",
    HREF: "https://defcon.social/@tomlowndes",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/tlowndes"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/tomlowndes/",
  }
];
