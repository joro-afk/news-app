<template>
  <div class="news-list-container">
    <li v-for="stories in news.news" :key="stories" class="news-list">
      <div class="news-container">
        <div class="news-title-container">{{ stories.title }}</div>
        <div class="content-container">
       <div>  {{stories.source}} </div>  <div> {{ stories.PublishedAt }}</div>
        </div>
      </div>
    </li>
    <div class="box">
  This is a box.
</div>

  </div>
</template>

<script>
import { useNewsStore } from "../stores/newsStore";
export default {
  name: "BaseNews",
  setup() {
    const news = useNewsStore();
    return {
      news,
    };
  },
};
</script>
