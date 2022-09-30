<template>
  <span :style="style" v-html="output"></span>
</template>

<script>
import MarkdownIt from 'markdown-it';

var Md = new MarkdownIt();

export default {
  name: "fsize",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      let fsize = data.split("}")[0];
      this.output = Md.renderInline(data.split("}")[1]);
      this.style = `font-size: ${fsize};`;
    } else {
      this.style = "";
      this.output = `<em>::fsize::组件存在语法错误</em>`
    }
  }
}
</script>