var app = new Vue({
    el: "#app",
    data: {
        name: "dicky"
    },
    beforeCreate: function() {
        console.log("before create name is: ", this.name)
    },
    created: function() {
        console.log("created name is: ", this.name)
    },
    beforeMount: function() {
        console.log("before mount")
    },
    mounted: function() {
        console.log("mounted")
        // this.$destroy() //to destroy call this
    },
    beforeUpdate: function() {
        console.log("before update, this.name: ", this.name)
    },
    updated: function() {
        console.log("updated, this.name: ", this.name)
    },
    beforeDestroy: function() {
        console.log("beforeDestroyed")
    },
    destroyed: function() {
        console.log("destroyed")
    }
})