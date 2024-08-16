// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CockpitNest',
  tagline: 'Make it faster and easier to build a website like a rocket 🚀',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://dock-cockpitnest.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bizzcode', // Usually your GitHub org/user name.
  projectName: 'CockpitNest', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CockpitNest',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://saweria.co/BimaBizz',
            label: 'Saweria',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Quickstart',
                to: '/docs/quickstart',
              },
              {
                label: 'License',
                to: '/docs/lisence',
              },
            ],
          },
          {
            title: 'Basic Backend',
            items: [
              {
                label: 'Setting Public API',
                to: '/docs/basics/setting-api-cockpit',
              },
              {
                label: 'Creating a Page',
                to: '/docs/basics/create-a-page',
              },
              {
                label: 'Creating a Menus',
                to: '/docs/basics/create-a-menu',
              },
              {
                label: 'Website Settings',
                to: '/docs/basics/setting-your-website',
              },
            ],
          },
          {
            title: 'Basic Frontend',
            items: [
              {
                label: 'Pages Type',
                to: '/docs/category/pages-type',
              },
              {
                label: 'Components',
                to: '/docs/category/components',
              },
              {
                label: 'Customization',
                to: '/docs/category/customization',
              },
              {
                label: 'Hook API',
                to: '/docs/frontend/hook-library',
              },
              {
                label: 'Sitemap',
                to: '/docs/frontend/sitemap',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Saweria',
                href: 'https://saweria.co/BimaBizz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CockpitNest, Created by BizzCode.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
