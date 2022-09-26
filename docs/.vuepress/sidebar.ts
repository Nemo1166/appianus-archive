import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "onboarding",
    {
      icon: "info",
      text: "总论",
      link: "总论/",
    },
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
    "indexes",
  ],
});
