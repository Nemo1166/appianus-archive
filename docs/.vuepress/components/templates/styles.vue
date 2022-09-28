<template>
  <span :style="style">{{ output }}</span>
</template>

<script>
export default {
  name: "styles",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      this.style = data.split("}")[0].replaceAll("=",":");
      this.output = data.split("}")[1];
    } else {
      this.style = "";
      this.output = `<em>::text::组件存在语法错误</em>`
    }
  }
}
</script>