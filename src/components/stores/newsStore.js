import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore({
    id: "newsStore",
    state() {
        return {
            data: '',
            news: '',
            location: '',
            category: '',
        }
    },

    actions: {
        async setNews() {
            const options = {
                method: 'POST',
                url: 'https://newsnow.p.rapidapi.com/newsv2',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '869dd0e0bfmsh0cce425d64a68b4p159db5jsn25def7f3b22f',
                    'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
                },
                data: {
                    query: 'AI',
                    page: 3,
                    time_bounded: true,
                    from_date: '25/09/2023',
                    to_date: '01/10/2023',
                    location: this.location,
                    category: this.category,
                    source: ''
                }
            };

            try {
                const response = await axios.request(options);
                this.data = response.data;
                this.news = response.data.news;
            } catch (error) {
                console.error(error);
            }
        },
        updateInputValues(newValue1, newValue2) {
            this.location = newValue1;
            this.category = newValue2;
            this.setNews()
        },

    },


})
