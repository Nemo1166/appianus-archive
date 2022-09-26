import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar.js";
import { Sidebar } from "./sidebar.js";
import { stylizers } from "./stylizers/index.js";

export default hopeTheme({
  hostname: "https://appianus-archive-insider.terrach.net",

  author: {
    name: "Appianus Archive",
    url: "",
  },

  iconAssets: "//at.alicdn.com/t/c/font_3670092_i1w1g534sfj.css",
  // iconAssets: "/iconfont/iconfont.css",
  iconPrefix: "iconfont icon-ak-",
  // iconAssets:"iconfont",

  logo: "/logo.png",

  // repo: "",
  lastUpdated: true,
  contributors: false,
  editLink: false,

  docsDir: "demo/theme-docs/src",

  pageInfo: ["Author", "Original", "Category", "Tag", "ReadingTime"],

  navbar: Navbar,

  sidebar: Sidebar,

  footer: "亚庇安档案馆",
  copyright: "CC-BY-NC-SA 4.0 | Copyright © 2022-present Appianus Archive",
  displayFooter: true,

  themeColor: {
    brown: "#a52a2a",
    grey: "#656565",
    coral: "#ff7f50",
    purple: "#9400d3"
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    comment: {
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },
    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      // codetabs: true,
      container: true,
      // demo: true,
      echarts: true,
      flowchart: true,
      // gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: stylizers,
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      maxPicSize:512,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    },
  },
});