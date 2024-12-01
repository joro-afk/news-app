import { defineStore } from "pinia";
import { apiKey } from "../enviroment/apiKey";

export const useNewsStore = defineStore("news", {
  state: () => ({
    articles: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchNews(query = "dji") {
      if (this.loading) {
        console.log("La solicitud está en progreso.");
        return;
      }

      // Start loading state
      this.loading = true;
      this.error = null; // Clear previous errors
      this.articles = []; // Clear previous articles

      // Ensure query is properly encoded for URL
      const encodedQuery = encodeURIComponent(query);

      const url = `https://gnews.io/api/v4/search?q=${encodedQuery}&lang=en&country=us&max=10&apikey=${apiKey}`;

      try {
        console.log("Realizando solicitud a la API...");

        const response = await fetch(url);

        // Check if response is OK
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        // Parse JSON response
        const data = await response.json();
        console.log("Respuesta de la API:", data);

        // Check if articles are present in the data
        if (data && Array.isArray(data.articles) && data.articles.length > 0) {
          this.articles = data.articles;
        } else {
          throw new Error(
            "No se encontraron artículos o la estructura de datos es incorrecta"
          );
        }
      } catch (err) {
        // Log any errors
        console.error("Error al cargar las noticias:", err);
        this.error = err.message || "Failed to fetch news";
      } finally {
        // Reset loading state
        console.log("Solicitud completada, cambiando estado de loading.");
        this.loading = false;
      }
    },
  },
});
