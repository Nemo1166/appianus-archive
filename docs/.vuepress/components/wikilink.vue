<template>
  <router-link :to="target"><slot /></router-link>
</template>

<script>
export default {
  name: "wikilink",
  props: ["target"],
}
</script>

<style>

</style>