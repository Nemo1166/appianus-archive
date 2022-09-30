import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { containerPlugin } from '@vuepress/plugin-container'

import { wikilink, wikimedia } from "./wikiml/wikimarkup";
import { pageTemplate } from "./wikiml/templates"

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "zh-CN",
  title: "亚庇安档案馆",
  description: "泰拉漫游指南",

  theme,

  shouldPrefetch: false,
  head: [
    ['script', {
      src: "//unpkg.com/akicons@latest/iconfont.js"
    }]
  ],

  extendsMarkdown: (md) => {
    md.use(wikilink)
    .use(pageTemplate)
    .use(wikimedia)
  },

  plugins:[
    containerPlugin({
      type: "side-panel",
    })
  ],
});
