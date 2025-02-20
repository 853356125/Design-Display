import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '设计展示',
  description: '黄先生的设计作品blog',
  base: '/Design-Display',
  lastUpdated: true,
  cleanUrls: true,
  // appearance: 'dark',
  themeConfig: {
    logo: '/logo.svg',
    // 修改侧边栏导航的标题
    outline: false,
    // 修改文档页脚的文字
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lightModeSwitchTitle: '切换到浅色主题',
    darkModeSwitchTitle: '切换到深色主题',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '个人信息', link: '/works/Info' },
      {
        text: '界面设计',
        items: [
          { text: '可视化界面设计', link: '/works/visualization' },
          { text: '后台管理界面设计', link: '/works/back-stage' },
          { text: 'APP界面设计', link: '/works/app' },
          { text: 'Web界面设计', link: '/works/web' }
        ]
      },
      { text: '品牌设计', link: '/works/brand' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Mr. Huang'
    }
  },
  markdown: {
    image: {
      // 开启图片懒加载
      lazyLoading: true
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/Design-Display/logo.svg' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
  ]
})
