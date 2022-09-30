<template>
<ruby>
  <span v-html="base"></span><rp>(</rp><rt v-html="desc"></rt><rp>)</rp>
</ruby>
</template>

<script>
import MarkdownIt from 'markdown-it';

var Md = new MarkdownIt();

export default {
  name: "styles",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      this.base = Md.renderInline(data.split("}")[0]);
      this.desc = Md.renderInline(data.split("}")[1]);
    }
  }
}
</script>