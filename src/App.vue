<template>
  
  <BaseLayout />
</template>

<script>
import BaseLayout from "../src/components/layout/BaseLayout.vue";
import { useNewsStore } from "../src/components/stores/newsStore";

export default {
  setup() {
    const news = useNewsStore();
    news.setNews();
    return {
      news,
    };
  },
  components: {
    BaseLayout,
  },
};
</script>

<style>
@import "@/assets/style.css"; 
</style>
