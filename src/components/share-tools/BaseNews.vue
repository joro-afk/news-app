<template>
  <div v-if="newsStore.loading">Cargando noticias...</div>
  <div v-if="newsStore.error" class="error">{{ newsStore.error }}</div>

  <div v-if="!newsStore.loading && !newsStore.error">
    <div class="searcher">
      <input 
        v-model="searchQuery" 
        @keyup.enter="handleSearch" 
        type="text" 
        placeholder="Buscar noticias..." 
        class="search-input" 
      />
      <button @click="handleSearch" class="search-button">Buscar</button>
    </div>

    <ul>
      <li v-for="article in newsStore.articles" :key="article.title">
        <h1>{{ article.title }}</h1>
        <img :src="article.image" :alt="article.title" class="image-aspect-ratio" />
        <p>{{ article.description }}</p>
        <p>{{ article.publishedAt }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useNewsStore } from "../stores/newsStore";
import { ref } from 'vue';

const newsStore = useNewsStore();
const searchQuery = ref('');


if (!newsStore.articles.length) {
  newsStore.fetchNews(''); 
}


const handleSearch = () => {
  if (searchQuery.value.trim() !== '') {
    newsStore.fetchNews(searchQuery.value); 
  }
};
</script>