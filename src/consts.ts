import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Tom Lowndes",
  EMAIL: "info@tomlowndes.co.uk",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories.",
};

export const USES: Metadata = {
  TITLE: "Uses",
  DESCRIPTION: "A living index of the physical hardware, everyday carry, digital tools, and self-hosted infrastructure I use daily.",
};

export const NOW: Metadata = {
  TITLE: "Now",
  DESCRIPTION: "What I'm focused on right now.",
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
