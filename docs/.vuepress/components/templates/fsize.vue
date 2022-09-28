<template>
  <span :style="style">{{ output }}</span>
</template>

<script>
export default {
  name: "fsize",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      let fsize = data.split("}")[0];
      this.output = data.split("}")[1];
      this.style = `font-size: ${fsize};`;
    } else {
      this.style = "";
      this.output = `<em>::fsize::组件存在语法错误</em>`
    }
  }
}
</script>