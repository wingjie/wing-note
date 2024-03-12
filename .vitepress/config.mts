import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wing's Note",
  description: "A VitePress Site",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  themeConfig: {
    footer: {
      // message: '未来可期',
      // copyright: 'Copyright © 2019-present Evan You'
    },
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: 'Hello World',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/api-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/lwj-wing/vite-note' }
    ],
    algolia: {
      appId: "3CJLJW7LI7",
      apiKey: "7af30568b55e6ef20782a354e0ee8ae0",
      indexName: "lwj-wing-gitee",
      // container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
      // debug: false
    },
  }
})
