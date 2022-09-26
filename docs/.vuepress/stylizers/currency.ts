import { StylizeOptions } from "vuepress-plugin-md-enhance";

const classes = new Map([
  ["龙门币", "LMD"],
  ["信用点", "credit"],
  ["理智", "sanity"],
  ["数据契约", "data-contract"],
  ["资质凭证", "comm-cert"],
  ["高级凭证", "dist-cert"],
  ["采购凭证", "shop-voucher"],
  ["合成玉", "orundum"],
  ["源石锭", "orig-ingot"],
  ["至纯源石", "orig-prime"],
]);

export var typeCurrency = [] as StylizeOptions;

for (let [key, value] of classes) {
  var item = [{
    matcher: key,
    replacer: ({ tag }) => {
      if (tag === "em")
        return {
          tag: "currency",
          attrs: { type: value }
        };
    }
  }] as StylizeOptions;
  typeCurrency = typeCurrency.concat(item)
}