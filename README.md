# tomlowndes.co.uk

The source for my personal site: portfolio, CV, blog and a few extra pages. It's a static site built with [Astro](https://astro.build) and Tailwind CSS, starting from the [Astro Nano](https://github.com/markhorn-dev/astro-nano) theme.

**Live site:** [tomlowndes.co.uk](https://tomlowndes.co.uk)

## What's on the site

- **Projects:** selected design work, from brand systems and print to the small desktop and mobile tools I build
- **Work:** roles and experience
- **CV:** an online CV, with the CV and portfolio PDFs to download
- **Blog:** notes on design, workflow, AuDHD-friendly systems and self-hosting
- **Uses:** the hardware, everyday carry and software I use daily
- **Now:** what I'm focused on at the moment
- **Contact:** a simple form, sent through Web3Forms

The site also generates an RSS feed, a sitemap and Open Graph images for each post and project.

## Running it locally

You'll need Node.js 20 or later.

```bash
npm install
npm run dev        # start the dev server at http://localhost:4321
npm run build      # type-check and build to dist/
npm run preview    # preview the production build
npm run lint       # run ESLint
```

## Adding content

All content is Markdown, in `src/content/`:

| Folder      | What it holds                  |
|-------------|--------------------------------|
| `blog/`     | Blog posts, one folder each    |
| `projects/` | Portfolio projects             |
| `work/`     | Roles shown on the Work page   |
| `uses/`     | Items on the Uses page         |

Each collection's frontmatter fields are defined in `src/content/config.ts`. Set `draft: true` to hide a post or project. Site-wide settings (name, email, page titles and social links) are in `src/consts.ts`.

## Credits

The theme is based on [Astro Nano](https://github.com/markhorn-dev/astro-nano) by Mark Horn. All design work, writing and images are © Tom Lowndes. Please ask before reusing them.
