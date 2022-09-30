import Plugin from "markdown-it-regexp";

export var pageTemplate = Plugin(
  /::([^\|:\n]+)\n(\|([^\n]+)\n)+::/,
  (match:String[]) => {
    // console.log(match)
    // return `<pagetpl type="${match[1].trim()}" data="${match[2].trim()}" />`
  }
)