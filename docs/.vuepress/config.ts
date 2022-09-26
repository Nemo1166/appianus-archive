import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { containerPlugin } from '@vuepress/plugin-container'

import wikilinks from "markdown-it-wikilinks";

export default defineUserConfig({
  base: "/",
  dest: "./dist",
  lang: "zh-CN",
  title: "亚庇安档案馆",
  description: "泰拉漫游指南",


  theme,

  shouldPrefetch: false,
  head:[
    ['script',{
      src: "//at.alicdn.com/t/c/font_3670092_xp42yhywg5q.js"
    }]
  ],

  extendsMarkdown: (md) => {
    md.use(wikilinks())
  },

  plugins:[
    containerPlugin({
      type: "side-panel",
    })
  ],
});
