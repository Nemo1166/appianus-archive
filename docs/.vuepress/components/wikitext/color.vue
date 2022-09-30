<template>
  <span :style="style" v-html="output"></span>
</template>

<script>
import MarkdownIt from 'markdown-it';

var Md = new MarkdownIt();

export default {
  name: "color",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      let color = data.split("}")[0];
      this.output = Md.renderInline(data.split("}")[1]);
      this.style = `color: ${color};`;
    } else {
      this.style = "";
      this.output = `<em>::color::组件存在语法错误</em>`
    }
  }
}
</script>