<template>
  <BaseLayout />
</template>

<script>
import { onMounted } from "vue";
import BaseLayout from "../src/components/layout/BaseLayout.vue";
import { useNewsStore } from "../src/components/stores/newsStore";

export default {
  setup() {
    const news = useNewsStore();

    onMounted(() => {
      news.fetchNews();
    });

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
