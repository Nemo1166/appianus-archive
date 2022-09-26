import { StylizeOptions } from "vuepress-plugin-md-enhance";
import { iconmap } from "../iconmap";

export var typeIcon = [] as StylizeOptions;

for (let item of iconmap) {
  var obj = [{
    matcher: item[0],
    replacer: ({ tag }) => {
      if (tag === "em")
        return {
          tag: "inline-icon",
          attrs: { type: item[1] }
        };
    }
  }] as StylizeOptions;
  typeIcon = typeIcon.concat(obj)
}