import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/j-element/",
  outDir: '../docs',
  title: "J-Element",
  description: "J-Element 使用文档",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "组件", link: "/button" },
    ],

    sidebar: [
      {
        text: "组件",
        items: [
          {
            text: "Basic",
            items: [
              { text: "Icon 图标", link: "/api-examples" },
              { text: "Button 按钮", link: "/button" },
              { text: "Link 文字链接", link: "/markdown-examples" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/striveB/j-element" },
    ],

    footer: {
      message: '本文档内容版权为小阿俊个人所有，保留所有权利。',
      copyright: 'Copyright © 2023-present The Mr Jun.',
    },
  },
});
