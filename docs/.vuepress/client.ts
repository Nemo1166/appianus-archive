import { defineClientConfig } from "@vuepress/client";
import inlineIco from "./components/inlineicon.vue"
import curr from "./components/currency.vue"
import wikimedia from "./components/wikimedia.vue"
import wikilink from "./components/wikilink.vue"
import linkindex from "./components/linkindex.vue"

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("inline-icon", inlineIco)
        .component("currency",curr)
        .component("wikimedia",wikimedia)
        .component("wikilink",wikilink)
        .component("indexes",linkindex);
    },
});