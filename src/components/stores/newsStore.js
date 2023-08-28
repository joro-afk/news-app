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
           const url = 'https://newsnow.p.rapidapi.com/topheadline';
           const options = {
               method: 'POST',
               headers: {
                   'content-type': 'application/json',
                   'X-RapidAPI-Key': '869dd0e0bfmsh0cce425d64a68b4p159db5jsn25def7f3b22f',
                   'X-RapidAPI-Host': 'newsnow.p.rapidapi.com'
               },
               body: {
               }
           };


           try {
               const response = await fetch(url, options);
               const result = await response.json();
               this.data = result;
               this.news = this.data['Top-Headlines'];
               console.log(this.news);
           } catch (error) {
               console.error(error);
           }
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
            //         region: 'us-en'
            //     }
            // };

            // try {
            //     const response = await fetch(url, options);
            //     const result = await response.json();
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }

        }

    }





})