import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  state: () => ({
    articles: [],
    loading: false,
    error: null,
    apiKey: process.env.VUE_APP_API_KEY,
  }),
  getters: {
    getApiKey: (state) => state.apiKey,
  },
  actions: {
    async fetchNews(query = "today") {
      if (this.loading) {
        console.log("La solicitud está en progreso.");
        return;
      }

      this.loading = true;
      this.error = null;
      this.articles = [];

   
      const encodedQuery = encodeURIComponent(query);

      
      const url = `https://gnews.io/api/v4/search?q=${encodedQuery}&lang=en&country=us&max=10&apikey=${this.apiKey}`;

      try {
        console.log("Realizando solicitud a la API...");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

    
        const data = await response.json();
        console.log("Respuesta de la API:", data);

       
        if (data && Array.isArray(data.articles) && data.articles.length > 0) {
          this.articles = data.articles;
        } else {
          throw new Error(
            "No se encontraron artículos o la estructura de datos es incorrecta"
          );
        }
      } catch (err) {
       
        console.error("Error al cargar las noticias:", err);
        this.error = err.message || "Failed to fetch news";
      } finally {
        
        console.log("Solicitud completada, cambiando estado de loading.");
        this.loading = false;
      }
    },
  },
});