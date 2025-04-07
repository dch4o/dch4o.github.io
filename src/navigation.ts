import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'CV',
      href: '/#CV',
    },
    {
      text: 'Portfolio',
      href: '/#Portfolio',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    { 
      text: 'Github', 
      href: 'https://github.com/dch4o/dch4o.github.io',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Personal',
      links: [
        { text: 'CV', href: '/#CV' },
        { text: 'Portfolio', href: '/#Portfolio' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { text: 'All Posts', href: getBlogPermalink() },
        // { text: 'Categories', href: getPermalink('tutorials', 'category') },
        // { text: 'Tags', href: getPermalink('astro', 'tag') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/dch4o' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/dch4o' },
  ],
  footNote: ``,
};
