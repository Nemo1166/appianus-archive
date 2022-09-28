import Plugin from "markdown-it-regexp";
import { filemap } from "./getlinks";

export var wikilink = Plugin(
  /\[\[([^|\]\n]+)(\|([^\]\n]+))?\]\]/,
  (match: String[]) => {
    if (!!match[1]) {
      if (!!match[3]) {
        var lname = match[3].trim();
      } else {
        var lname = match[1].trim();
      }
      var lchap = "";
      var ltgt = match[1].trim();
      if (ltgt.indexOf("#") != -1) {
        ltgt = match[1].split("#")[0].trim();
        lchap = "#" + match[1].split("#")[1].trim();
      }
      var llink = "";
      for (const element of filemap) {
        if (ltgt == element[0]) {
          llink = element[1];
          return `<wikilink target="${llink}${lchap}">${lname}</wikilink>`;
        };
      }
      if (llink == "") {
        return `[[${match[1]}|找不到此链接]]`;
      }
    } else {
      return `[[${match[1]}|找不到此链接]]`;
    }
  }
)

export var wikimedia = Plugin(
  /::([^\|:\n]+)\|([^:\n]+)?::/,
  (match:String[]) => {
    return `<wikimedia type="${match[1].trim()}" data="${match[2].trim()}" />`
  }
)