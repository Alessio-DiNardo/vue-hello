const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',

        }
    },

    methods: {
        testingFunction(){
            this.message = 'How to edit data fields from a function';
        }
    },

}).mount('#app');