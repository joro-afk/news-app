import { defineStore } from 'pinia';
import axios from 'axios';

export const useNewsStore = defineStore({
    id: "newsStore",
    state() {
        return {
            data: '',
            news: '',
            subject: '',
            from_date: '',
            to_date: '',
            time: true,
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
                    query: this.subject,
                    page: 1,
                    time_bounded: this.time,
                    from_date: this.from_date,
                    to_date: this.to_date,
                    location: '',
                    category: '',
                    source: ''
                }
            };

            try {

                const response = await axios.request(options);
                this.data = response.data;
                this.news = response.data.news;

            } catch (error) {
                console.error(error);
                this.setNews()
            }
        },
        updateInputValues(newValue2, newValue3, newValue4) {
            this.news = ''
            this.subject = newValue2;
            if (newValue3 || newValue4 == '') {
                this.time = false
            }
            if (this.subject == '') {
                this.subject = 'Champions League'
            }
            let firstDate = newValue3.split('-');
            let secondDate = newValue4.split('-');
            this.from_date = firstDate[2] + '/' + firstDate[1] + '/' + firstDate[0];
            this.to_date = secondDate[2] + '/' + secondDate[1] + '/' + secondDate[0];
            this.setNews()
        },

    },


})

