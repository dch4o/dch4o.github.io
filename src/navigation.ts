import { link } from "node:fs";
import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "About",
      href: "/#about",
    },
    {
      text: "CV",
      href: getPermalink("/personal/cv"),
    },
    {
      text: "Blog(KR/EN)",
      links: [
        { text: "All Posts", href: getBlogPermalink() },
        { text: "Paper Reviews", href: getPermalink("papers", "category") },
        { text: "Development", href: getPermalink("development", "category") },
        { text: "Life", href: getPermalink("life", "category") },
      ],
    },
    {
      icon: "tabler:brand-github",
      text: "Source",
      href: "https://github.com/dch4o/dch4o.github.io",
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/in/dch4o",
    },
    { ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },
    {
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/dch4o",
    },
  ],
  footNote: `
  <div>Copyright © 2025 | Dohoon Cho</div>
  <div>Last updated on April 14, 2025. This blog is built based on <a class="text-blue-500 underline dark:text-muted" href="https://github.com/onwidget/astrowind"> Astrowind</a>.</div>
  `,
};
