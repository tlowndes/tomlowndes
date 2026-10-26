import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tom Lowndes",
  EMAIL: "info@tomlowndes.co.uk",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Tom Lowndes | Design lead in Cannock, Staffordshire",
  DESCRIPTION: "Design lead for in-house and remote teams. Freelance app, brand and web design from Cannock, Staffordshire.",
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
  DESCRIPTION: "Selected design work by Tom Lowndes: brand systems, print production, digital interfaces, small apps and the case studies behind them.",
};

export const USES: Metadata = {
  TITLE: "Uses",
  DESCRIPTION: "A living index of the physical hardware, everyday carry, digital tools, and self-hosted infrastructure I use daily.",
};

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "What I'm focused on right now: looking for my next design role, building small apps, keeping a calm digital setup, home server plans and current reading.",
};

export const CONTACT: Metadata = {
  TITLE: "Contact",
  DESCRIPTION: "Get in touch with Tom Lowndes about design roles, freelance work or collaborations. Use the form or email, and expect a reply within a couple of working days.",
};

// Web3Forms access key. Public by design: it only lets the form send to the inbox it was created for.
export const WEB3FORMS_KEY = "2b88b315-cd04-4d42-81fe-fc3899e7ad14";

export const CV: Metadata = {
  TITLE: "CV",
  DESCRIPTION: "Design lead with 13+ years across brand, print, packaging, digital and video. CV and portfolio downloads.",
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
