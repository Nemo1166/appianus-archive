<template>
  <span class="inlnico icocurr">
    <router-link :to="currLink">
      <svg class="inline-icon" aria-hidden="true">
        <use :xlink:href="currIcon"></use>
      </svg>
    </router-link>
  </span>
</template>

<script>
import curr from "./currency.json"

export default {
  name: "curr",
  props: ["type"],
  created() {
    var thiscurr = curr.filter((i) => i.icon === this.type)[0];
    this.currIcon = "#icon-ak-" + thiscurr.icon;
    this.currName = thiscurr.name;
    this.currLink = "/系统/数值.html#" + thiscurr.name;
  },
};
</script>

<style>
.icocurr {
  margin-left: 0;
}
</style>