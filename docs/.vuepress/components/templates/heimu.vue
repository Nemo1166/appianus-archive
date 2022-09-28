<template>
  <span class="heimu" title="你知道的太多了">{{ data }}</span>
</template>

<script>

import MarkdownIt from 'markdown-it';

// var md = new MarkdownIt;

export default {
  name: "heimu",
  props: ["data"],
  // created() {
  //   this.output = md.render(this.data);
  // }
}
</script>