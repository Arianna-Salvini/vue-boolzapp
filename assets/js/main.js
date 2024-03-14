console.log('hello');

// ● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
// ● Visualizzazione dinamica dei messaggi: 
// - tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
//
// - visualizzare i messaggi solo del contatto attivato

const { createApp } = Vue

createApp({
    data() {
        return {
            selectedProfile: null,
            profiles: [
                {
                    image: './assets/img/avatar_1.jpg',
                    name: 'Michele',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_2.jpg',
                    name: 'Fabio',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_3.jpg',
                    name: 'Samuele',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'

                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        },

                    ]
                },
                {
                    image: './assets/img/avatar_4.jpg',
                    name: 'Alessandro B.',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },

                    ]

                },
                {
                    image: './assets/img/avatar_5.jpg',
                    name: 'Alessandro L.',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },
                        {

                        },

                    ]
                },
                {
                    image: './assets/img/avatar_6.jpg',
                    name: 'Claudia',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        },

                    ]
                },
                {
                    image: './assets/img/avatar_7.jpg',
                    name: 'Federico',
                    text: 'Lorem ipsum',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_8.jpg',
                    name: 'Davide',
                    text: 'Lorem ipsum',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        },

                    ]

                },
            ],
        }
    },
    
    methods: {
        // Attivare il contatto cliccato
        makeActiveProfile(profile) {
            this.selectedProfile = profile
        },

    },

    // ● Click sul contatto mostra la conversazione del contatto cliccato

    mounted() {
      },

}).mount('#app')

