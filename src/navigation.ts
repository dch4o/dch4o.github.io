import { link } from 'node:fs';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: '/',
    },
    {
      text: 'CV',
      href: getPermalink('/personal/cv'),
    },
    {
      text: 'Blog',
      links: [
        { text: 'All Posts', href: getBlogPermalink() },
        { text: 'Paper Reviews', href: getPermalink('papers', 'category') },
        { text: 'Development', href: getPermalink('development', 'category') },
        { text: 'Life (Korean)', href: getPermalink('life', 'category') },
      ]
    },
    { 
      text: 'Github', 
      href: 'https://github.com/dch4o/dch4o.github.io',
    },
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/dch4o' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/dch4o' },
  ],
  footNote: `Copyright © 2025 | Dohoon Cho`,
};
