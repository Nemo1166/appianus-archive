<template>
  <span :style="style">{{ output }}</span>
</template>

<script>
export default {
  name: "color",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      let color = data.split("}")[0];
      this.output = data.split("}")[1];
      this.style = `color: ${color};`;
    } else {
      this.style = "";
      this.output = `<em>::color::组件存在语法错误</em>`
    }
  }
}
</script>