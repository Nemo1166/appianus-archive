import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "欢迎",
    "总论",
    {
      icon: "operator",
      text: "干员",
      prefix: "干员/",
      link: "干员/",
      collapsable: true,
      children: "structure",
    },
    {
      icon: "setting",
      text: "系统",
      prefix: "系统/",
      link: "系统/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "模组",
      icon: "repository",
      link: "模组/",
      prefix: "模组/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "编辑指南",
      icon: "setting",
      link: "编辑指南/",
      prefix: "编辑指南/",
      collapsable: true,
      children: [
        "","开始编辑","markdown","md-show","md-enhance","extension","templates"
      ],
    },
    "关于",
  ],
});
