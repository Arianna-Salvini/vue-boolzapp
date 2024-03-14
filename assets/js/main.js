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
                {
                    image: './assets/img/avatar_4.jpg',
                    name: 'Alessandro B.',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_5.jpg',
                    name: 'Alessandro L.',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_6.jpg',
                    name: 'Claudia',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_7.jpg',
                    name: 'Federico',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
                {
                    image: './assets/img/avatar_8.jpg',
                    name: 'Davide',
                    text: 'Lorem ipsum',
                    time: 16.15,
                },
            ]

        }
    }
    // methods: {

    // }
}).mount('#app')