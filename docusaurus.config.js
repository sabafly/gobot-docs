module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
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
      {
        fromExtensions: ['html', 'htm'],
        toExtensions: ['exe', 'zip'],
        redirects: [
          {
            to: '/docs/intro',
            from: ['/docs']
          },
          {
            to: '/',
            from: ['/404']
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
      title: 'gobot',
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
          label: 'docs',
          position: 'left',
        },
        // ... other links
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Document',
              to: '/docs/intro',
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
        alt: 'gobot Logo',
        src: 'img/logo.svg',
        href: 'https://gobot.sabafly.net',
        width: 51,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} sabafly. Built with Docusaurus.`, // You can also put own HTML here
    },
  },
}