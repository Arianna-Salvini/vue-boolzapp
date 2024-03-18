console.log('hello');

// ● Visualizzazione dinamica della lista contatti
// ● Visualizzazione dinamica dei messaggi
// ● Click sul contatto mostra la conversazione del contatto cliccato
const currentTime = luxon.DateTime.now()

const { createApp } = Vue

createApp({
    data() {
        return {
            selectedProfile: null,
            messageTyped: '',
            searchedProfile: '',
            defaultMessage:'Seleziona una contatto per visualizzare la chat',
            profiles: [
                {
                    image: './assets/img/avatar_1.jpg',
                    name: 'Michele',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15',
                            message: 'Tutto fatto!',
                            status: 'received'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_2.jpg',
                    name: 'Fabio',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '20/03/2020 16:30',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_3.jpg',
                    name: 'Samuele',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '28/03/2020 10:10',
                            message: 'La Marianna va in campagna',
                            status: 'received'

                        },
                        {
                            date: '28/03/2020 10:20',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15',
                            message: 'Ah scusa!',
                            status: 'received'
                        },

                    ]
                },
                {
                    image: './assets/img/avatar_4.jpg',
                    name: 'Alessandro B.',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },

                    ]

                },
                {
                    image: './assets/img/avatar_5.jpg',
                    name: 'Alessandro L.',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'

                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        },

                    ]
                },
                {
                    image: './assets/img/avatar_6.jpg',
                    name: 'Claudia',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        },

                    ]
                },
                {
                    image: './assets/img/avatar_7.jpg',
                    name: 'Federico',
                    text: 'Ultimo messaggio inviato',
                    time: 16.15,
                    messages: [
                        {
                            date: '10/01/2020 15.15',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'

                        },
                        {
                            date: '10/01/2020 15.30',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                    ]
                },
                {
                    image: './assets/img/avatar_8.jpg',
                    name: 'Davide',
                    text: 'Ultimo messaggio inviato',
                    messages: [
                        {
                            date: '10/01/2020 15:30',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'

                        },
                        {
                            date: '10/01/2020 15:50',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51',
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
            this.defaultMessage=''
        },
        // dividere in base alla classe i messsaggi inviati dai messaggi ricevuti
        makeMessage(messageChat) {
            if (messageChat.status === 'sent') {
                return 'sent_message'
            } else {
                return 'arrived_message'
            }
        },
        // - l’utente scrive un testo nella parte bassa
        // - digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
        sendMessage() {
            // se il si è selezionato un contatto e se la lunghezza del messaggo scritto è maggiore di 0 crea il nuovo messaggio 'sent'
            if (this.selectedProfile && this.messageTyped.length > 0) {
                let newMessageUser = {
                    // data corrente dinamica tramite Luxon
                    date:luxon.DateTime.now().toFormat('HH:mm'),
                    message: this.messageTyped,
                    status: 'sent',
                }
                // pusho il messaggio nell'array dei messsaggi
                this.selectedProfile.messages.push(newMessageUser)
                // calcello all'invio la barra
                this.messageTyped = ''
                //Attivo il messaggio di risposta
                this.replyMessages()
            }
        },
        // riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
        replyMessages() {
            setTimeout(() => {
                let replyMessage = {
                    date: luxon.DateTime.now().toFormat('HH:mm'),
                    message: "Ok",
                    status: 'received'
                }
                this.selectedProfile.messages.push(replyMessage)

            }, 1000)
        },

    },

    computed: {
        searchBarProfile(){
            let searchLowerCase = this.searchedProfile.toLowerCase()
            if (searchLowerCase === '') {
                return this.profiles
            } else {
                return this.profiles.filter(profile => {
                    return profile.name.toLowerCase().includes(searchLowerCase)
                })
            }
        },
      },

    mounted() {
    },

}).mount('#app')

