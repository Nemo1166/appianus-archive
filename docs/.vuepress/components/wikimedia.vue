<template>
  <component :is="type" :data="data" />
</template>

<script>
import color from "./wikitext/color.vue";
import styles from "./wikitext/styles.vue";
import fsize from "./wikitext/fsize.vue";
import heimu from "./wikitext/heimu.vue";
import rubys from "./wikitext/rubys.vue";

export default {
  name: 'wikimedia',
  props: ['data', 'type'],
  components: {
    color,
    styles,
    fsize,
    heimu,
    rubys,
  },
  created() {
  }
}
</script>

<style>

</style>