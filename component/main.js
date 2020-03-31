Vue.component('item-list', {
    props: ["item", "item1"],
    template: "<li> {{ item1.name }} {{ item1.name }}</li>"
})


var app = new Vue({
    el : "#app",
    data: {
        items: [{
            id: 1,
            name: "pensil"
        },
        {
            id: 2,
            name: "bolpen"
        }],
        textinput: ""
    },
    methods: {
        addItem: function(item) {
            if (item.length === 0) {
                return
            }
            pjg = this.items.length
            this.items.push({id: pjg+1, name: item})
            this.textinput = ""
        }
    }
})