// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /**  @type {import('@docusaurus/plugin-content-docs').Plugin} */
      {
        path: 'docs',
        routeBasePath: 'docs',
        sidebarCollapsible: false,
        include: ['**/*.{md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      /**  @type {import('@docusaurus/plugin-content-pages').Plugin} */
      {
        path: 'src/pages',
        routeBasePath: '/',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      /**  @type {import('@docusaurus/plugin-client-redirects').Plugin} */
      {
        fromExtensions: ['html', 'htm', 'md', 'mdx'],
        toExtensions: ['exe', 'zip'],
        redirects: [
          {
            to: '/docs/intro',
            from: ['/docs']
          },
        ],
      },
    ],
  ],
  themes: ['@docusaurus/theme-classic'],

  baseUrl: '/',
  title: 'gobot',
  url: 'https://gobot.sabafly.net',
  favicon: '/img/favicon.ico',
  tagline: 'gobot はサーバーに便利な機能を追加します',

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Gobot',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        // ... other links
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/usage'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hnNBD8QNmB',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sabaflydev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sabafly/gobot',
            },
          ],
        },
      ],
      logo: {
        alt: 'Sabafly Developers Logo',
        src: 'img/sabafly_developers.svg',
        href: 'https://github.com/sabafly',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Sabafly Teams. Built with Docusaurus.`, // You can also put own HTML here
    },
  },
}

module.exports = config;