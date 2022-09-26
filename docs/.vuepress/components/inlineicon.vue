<template>
  <span class="inlnico">
    <router-link :to="icoclslink">
      <span :class="iconCls"> </span>{{ icoName }}
    </router-link>
  </span>
</template>

<script>
import iconmap from "./iconmap.json";

export default {
  name: "inlineIco",
  props: ["type"],
  created() {
    var thisico = iconmap.filter((i) => i.icon === this.type)[0];
    this.icoName = thisico.name;
    this.iconCls = "icon-inline iconfont icon-ak-" + thisico.icon;

    this.icoclslink = thisico.link;
  },
};
</script>

<style>
  .inlnico {
    margin: 0 0.1em;
  }
</style>