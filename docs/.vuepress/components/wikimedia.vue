<template>
  <component :is="type" :data="data" />
</template>

<script>
import color from "./templates/color.vue";
import styles from "./templates/styles.vue";
import fsize from "./templates/fsize.vue";
import heimu from "./templates/heimu.vue";
import rubys from "./templates/rubys.vue";

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