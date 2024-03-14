console.log('hello');

// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

const { createApp } = Vue

createApp({
    data() {
        return {
            profiles: [
                {
                image: './assets/img/avatar_1.jpg',
                    name: 'Michele',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_2.jpg',
                    name: 'Fabio',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_3.jpg',
                    name: 'Samuele',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },

            ]

        }
    }
    // methods: {

    // }
}).mount('#app')