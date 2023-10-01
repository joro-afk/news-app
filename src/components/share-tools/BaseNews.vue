<template>
  <div class="home">
    <div class="searcher">
      <div class="searcher-inputs">
        <input
          type="text"
          v-model="locationValue"
          placeholder="Choose Location"
        />
        <input
          type="text"
          v-model="categoryValue"
          placeholder="Choose Category"
        />
      </div>
      <button
        class="button-search"
        @click="news.updateInputValues(locationValue, categoryValue)"
      >
        Search
      </button>
    </div>
    <div class="news-list-container">
      <li v-for="stories in news.news" :key="stories" class="news-list">
        <div class="news-container">
          <div class="news-title-container">{{ stories.title }}</div>
          <div class="content-container">
            <div class="source">{{ stories.source }}</div>
            <div>{{ stories.date }}</div>
          </div>
          <div class="content">
            <img :src="stories.image" alt="" class="content-img" />
            <div class="content-text">{{ stories.body }}</div>
          </div>
          <div class="content-button">
            <button class="news-button">
              <a :href="stories.url" target="_blank">Read More</a>
            </button>
          </div>
        </div>
      </li>
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
  props: {
    image: {
      type: String,
      default: require("@/assets/logo.png"),
    },
  },
};
</script>
