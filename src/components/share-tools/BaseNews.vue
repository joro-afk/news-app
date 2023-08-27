<template>
  <div class="news-list-container">
    <li v-for="stories in news.topStories" :key="stories" class="news-list">
      <div class="news-container">
        <div class="news-title-container">{{ stories.title }}</div>
        <div><img :src="stories.mainMedia[0].gallery.url" alt="" class="news-img"/></div>
        <div class="content-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab officia
          voluptatem sit harum beatae saepe nostrum explicabo, ratione, ullam
          magnam consectetur ut fuga deleniti quidem necessitatibus quam dolore
          at quod! <br />
        </div>
      </div>
    </li>
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
