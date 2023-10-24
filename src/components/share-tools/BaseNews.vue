<template>
  <div>
    <div class="home" v-if="news.news != ''">
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
    <div class="loader" v-else>
      <fulfilling-square-spinner :animation-duration="4000" :size="80" />
      <h1 class="loader-text">Loading...</h1>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from "../stores/newsStore";
import { FulfillingSquareSpinner } from "epic-spinners";
export default {
  name: "BaseNews",
  components: {
    FulfillingSquareSpinner,
  },
  setup() {
    const news = useNewsStore();
    const locationValue = "";
    const categoryValue = "";
    return {
      news,
      locationValue,
      categoryValue,
    };
  },
};
</script>
