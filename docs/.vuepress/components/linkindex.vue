<template>
  <div class="list-indexes">
    <ul>
      <li v-for="item in items">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import links from "./links.json";
export default {
  name: "linkIndex",
  created() {
    this.items = links
  }
};
</script>

<style>
.list-indexes ul {
  width: 100%;
  overflow:hidden
}

.list-indexes li {
  width: 50%;
  float: left;
}
</style>