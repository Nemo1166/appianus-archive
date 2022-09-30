<template>
  <span :style="style" v-html="output"></span>
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
      this.style = data.split("}")[0].replaceAll("=",":");
      this.output = Md.renderInline(data.split("}")[1]);
    } else {
      this.style = "";
      this.output = `<em>::text::组件存在语法错误</em>`
    }
  }
}
</script>