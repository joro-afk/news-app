<template>
  <div>
    <div class="home" v-if="news.news != ''">
      <div class="searcher">
        <div class="searcher-inputs">
          <input
            type="text"
            v-model="subjectValue"
            placeholder="Subject e.g.:IA"
          />
          <div class="dateChoose">
            <input
              type="date"
              v-model="from_date"
              min="2020-01-01"
              :max="today"
            />
            <input
              type="date"
              v-model="to_date"
              min="2020-01-01"
              :max="today"
            />
          </div>
        </div>
        <button
          class="button-search"
          @click="
            news.updateInputValues(
           
              subjectValue,
              from_date,
              to_date
            )
          "
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
    const news = useNewsStore(),
      today = "",

      subjectValue = "",
      from_date = "",
      to_date = "";
    return {
      news,
   
      subjectValue,
      from_date,
      to_date,
      today,
    };
  },
  mounted() {
    this.getDate();
  },
  updated() {
    this.getDate();
  },

  methods: {
    getDate() {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      this.today = year + "-" + month + "-" + day;
    },
  },
};
</script>
