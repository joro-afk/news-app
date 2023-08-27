import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
    id: "newsStore",
    state() {
        return {
            data: "",
            topStories: [],
        }
    },

    actions: {
        async setNews() {

            const url = 'https://livescore6.p.rapidapi.com/news/v2/list';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '869dd0e0bfmsh0cce425d64a68b4p159db5jsn25def7f3b22f',
                    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                this.data = data
                this.topStories = data.topStories;
                console.log(this.topStories)

            } catch (error) {
                console.error(error);
            }
        }

    }





})