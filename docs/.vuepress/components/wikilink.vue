<template>
  <span><router-link to=""><slot /></router-link></span>
</template>

<script>
export default {
  name: "wikilink",
  props: ["target"],
}
</script>

<style>

</style>