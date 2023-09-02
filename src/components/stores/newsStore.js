import { defineStore } from 'pinia';

export const useNewsStore = defineStore({
    id: "newsStore",
    state() {
        return {
            data: {},
            news: '',
        }
    },

    actions: {
        async setNews() {
            // const url = 'https://newsnow.p.rapidapi.com/';
            // const options = {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json',
            //         'X-RapidAPI-Key': '869dd0e0bfmsh0cce425d64a68b4p159db5jsn25def7f3b22f',
            //         'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
            //     },
            //     body: {
            //         text: 'Europe',
            //         region: 'wt-wt'
            //     }
            // };
            // try {
            //     const response = await fetch(url, options);
            //     const result = await response.text();
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }

            const url = 'https://newsnow.p.rapidapi.com/newsv2';
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': '869dd0e0bfmsh0cce425d64a68b4p159db5jsn25def7f3b22f',
                    'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
                },
                body: {
                    query: 'G20',
                    page: 1,
                    time_bounded: false,
                    from_date: '01/02/2021',
                    to_date: '05/06/2021',
                    location: '',
                    category: '',
                    source: 'bloomberg.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

    }





})