<template>
<ruby>
  {{ base }} <rp>(</rp><rt>{{ desc }}</rt><rp>)</rp>
</ruby>
</template>

<script>
export default {
  name: "styles",
  props: ["data"],
  created() {
    if (this.data.indexOf("|")) {
      let data = this.data.replace("|", "}");
      this.base = data.split("}")[0];
      this.desc = data.split("}")[1];
    }
  }
}
</script>