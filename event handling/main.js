var app = new Vue({
    el: "#app",
    data: {
        name: "dicky",
        value: 12
    }, 
    methods: {
        decrement: function() {
            this.value--
        },
        dec(value) {
            this.value = value - 1
        }
    }
})