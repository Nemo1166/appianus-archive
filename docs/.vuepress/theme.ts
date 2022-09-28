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

  iconAssets: "//at.alicdn.com/t/c/font_3670092_lq7fc27wstb.css",
  // iconAssets: "/iconfont/iconfont.css",
  iconPrefix: "iconfont icon-ak-",
  // iconAssets:"iconfont",

  logo: "/logo.png",

  repo: "Nemo1166/appianus-archive",
  docsDir:"docs",
  lastUpdated: true,
  contributors: false,
  editLink: true,

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

  blog: {
    description: "",
    intro: "/关于.html",
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "username@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },

  plugins: {
    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://waline.terrach.net/",
      requiredMeta: ['nick'],
      wordLimit: [5, 200],
      imageUploader: false,
      walineLocales: { "/": { admin: "打工人", placeholder: "留个言吧。" } },
      emoji: ["https://unpkg.com/@waline/emojis@1.0.1/tw-emoji"]
    },
    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      // chart: true,
      // codetabs: true,
      container: true,
      // demo: true,
      // echarts: true,
      // flowchart: true,
      footnote: true,
      // gfm: true,
      imageSize: true,
      include: true,
      katex: true,
      lazyLoad: true,
      imageMark: true,
      mark: true,
      mermaid: true,
      tasklist: true,
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
      // vpre: true,
      // vuePlayground: true,
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