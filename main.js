var app = new Vue(
    {
        el: '#root',
        data: {
            contacts: [
                {
                    name: 'Matteo',
                    avatar: '_2',
                    visible: true,
                    messages:   [
                        {
                        date: '10/01/2020',
                        hour: '15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        // clicked: false
                        },
                        {
                        date: '10/01/2020',
                        hour: '15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                        // clicked: false
                        },
                        {
                        date: '10/01/2020',
                        hour: '16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        // clicked: false
                        }
                    ],
                },
                {
                    name: 'Marco',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020',
                            hour: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '20/03/2020',
                            hour: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            // clicked: false
                        },
                        {
                            date: '20/03/2020',
                            hour: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
                {
                    name: 'Annalisa',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020',
                        hour: '10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        // clicked: false
                        },
                        {
                        date: '28/03/2020',
                        hour: '10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        // clicked: false
                        },
                        {
                        date: '28/03/2020',
                        hour: '16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        // clicked: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020',
                            hour: '15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '10/01/2020',
                            hour: '15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
                {
                    name: 'Giacomo',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/10/2020',
                            hour: '15:00:55',
                            message: 'Ti ricordi di me?',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '10/10/2020',
                            hour: '15:50:00',
                            message: 'Certo che si!',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
                {
                    name: 'Martina',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '11/02/2020',
                            hour: '13:25:55',
                            message: 'Come va?',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '11/02/2020',
                            hour: '15:00:00',
                            message: 'Bene tu?',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
                {
                    name: 'Anna',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '14/03/2020',
                            hour: '12:30:55',
                            message: 'Che film mi consigli?',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '14/03/2020',
                            hour: '12:50:00',
                            message: 'Il signore degli anelli',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
                {
                    name: 'Beatrice',
                    avatar: '_9',
                    visible: true,
                    messages: [
                        {
                            date: '15/03/2020',
                            hour: '15:30:55',
                            message: 'Ciao',
                            status: 'sent'
                            // clicked: false
                        },
                        {
                            date: '15/03/2020',
                            hour: '15:50:00',
                            message: 'Ciao',
                            status: 'received'
                            // clicked: false
                        }
                    ],
                },
            ],
            chosen_contact_index: 0,
            written_message: '',
            contact_search: '',
            clicked: false,
            clicked_index: 0,
        },
        methods: {
            getImgUrl(contact) {
                var imgUrl = 'avatars/avatar' + contact.avatar + ".png";
                // console.log(imgUrl);
                return imgUrl;
            },
            getContactIndex(contact) {
                var contactIndex = this.contacts.indexOf(contact);
                // console.log(contactIndex);
                this.chosen_contact_index = contactIndex;
            },
            addMessage(){

                let date = new Date();
                let hour = date.getHours();
                let minutes = date.getMinutes();
                let day = date.getDate();
                let month = date.getMonth();
                let year = date.getFullYear();

                let messageObj = {
                    date: day + '/' + (month + 1) + '/' + year,
                    hour: hour + ':' + minutes ,
                    message: this.written_message,
                    status: 'sent',
                    // clicked: false,
                };

                if (this.written_message != '') {
                    this.contacts[this.chosen_contact_index].messages.push(messageObj);
                    this.autoScrollToBottom();

                    let answerObj = {
                        date: day + '/' + (month + 1) + '/' + year,
                        hour: hour + ':' + minutes ,
                        message:'ok',
                        status: 'received',
                        // clicked: false,
                    };

                    setTimeout(() => {
                         this.contacts[this.chosen_contact_index].messages.push(answerObj);
                         this.autoScrollToBottom()
                    }, 1500);

                }

                this.written_message = '';

            },
            contactFilter(name){

                let lowercase_contact_search = this.contact_search.toLowerCase();
                let lowercase_name = name.toLowerCase();

                let verify_contact = lowercase_name.startsWith(lowercase_contact_search);
                return verify_contact;

            },
            clickToggle(message_info,index){



                if (this.clicked == false) {

                //Vue.set(message_info, 'clicked', true);

                this.clicked = true;

                }else{

                //Vue.set(message_info, 'clicked', false);
                if(this.clicked_index == index){
                    this.clicked = false;
                }


                }

                this.clicked_index = index;
                // console.log(this.clicked);
                // console.log(index);
                // console.log(this.contacts[this.chosen_contact_index]);

            },
            IndexOfThis(index){

                this.clicked_index = index;

            },
            hideAllDropdownMenus(){

                // for (let i = 0; i < this.contacts.length; i++) {
                //     for (let j = 0; j < this.contacts[i].messages.length; j++) {
                //         this.contacts[i].messages[j].clicked = false;
                //     }
                // }
                this.clicked = false;

            },
            deleteMessage(index){
                if (this.contacts[this.chosen_contact_index].messages.length > 1) {
                    this.contacts[this.chosen_contact_index].messages.splice(index,1);
                }else {

                    /*
                    Vue.set(this.contacts[this.chosen_contact_index].messages[index], 'status', 'no_messages');
                    Vue.set(this.contacts[this.chosen_contact_index].messages[index], 'message', 'No messages');
                    Vue.set(this.contacts[this.chosen_contact_index].messages[index], 'clicked', false);
                    Vue.set(this.contacts[this.chosen_contact_index].messages[index], 'hour', '');
                    Vue.set(this.contacts[this.chosen_contact_index].messages[index], 'date', '');
                    */

                    this.contacts[this.chosen_contact_index].messages[index].status = 'no_messages';
                    this.contacts[this.chosen_contact_index].messages[index].message = 'No messages';
                    // this.contacts[this.chosen_contact_index].messages[index].clicked = false;
                    this.contacts[this.chosen_contact_index].messages[index].hour = '';
                    this.contacts[this.chosen_contact_index].messages[index].date = '';
                }

                this.clicked = false;
                // console.log(this.contacts[this.chosen_contact_index].messages[index]);
            },
            getLastMessageIndex(index){
                return (this.contacts[index].messages).length -1;
            },
            autoScrollToBottom(){
                Vue.nextTick(function(){
                    let chat_container = document.getElementsByClassName("chat-messages")[0];
                    chat_container.scrollTop = chat_container.scrollHeight;
                });
            }


        },
        created(){

            // for (let i = 0; i < this.contacts.length; i++) {
            //       this.contacts[i].messages.forEach((item, i) => {
            //         //item.clicked = false;
            //
            //         Vue.set(item, 'clicked', false);
            //
            //       });
            // }

        },


    }
);
