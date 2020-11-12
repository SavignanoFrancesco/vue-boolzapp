var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_2',
                    visible: true,
                    messages:   [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_3',
                    visible: true,
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
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_4',
                    visible: true,
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
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_5',
                    visible: true,
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
                        }
                    ],
                },
                {
                    name: 'Giacomo',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/10/2020 15:00:55',
                            message: 'Ti ricordi di me?',
                            status: 'sent'
                        },
                        {
                            date: '10/10/2020 15:50:00',
                            message: 'Certo che si!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Mirco',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '11/02/2020 13:25:55',
                            message: 'Come va?',
                            status: 'sent'
                        },
                        {
                            date: '11/02/2020 15:00:00',
                            message: 'Bene tu?',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Anna',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '14/03/2020 12:30:55',
                            message: 'Che film mi consigli?',
                            status: 'sent'
                        },
                        {
                            date: '14/03/2020 12:50:00',
                            message: 'Il signore degli anelli',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Beatrice',
                    avatar: '_9',
                    visible: true,
                    messages: [
                        {
                            date: '15/03/2020 15:30:55',
                            message: 'Ciao',
                            status: 'sent'
                        },
                        {
                            date: '15/03/2020 15:50:00',
                            message: 'Ciao',
                            status: 'received'
                        }
                    ],
                },
            ]
        },
        methods: {

        }
    }
);

console.log(app.contacts);