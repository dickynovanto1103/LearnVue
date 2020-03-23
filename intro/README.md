### Intro of Vue.js
1. In this experiment, we install vue using the cdn
2. In order to use vue, we must create Vue instance (the new Vue({options})) --> the parameter of the Vue is options which contains the binding to the DOM (defining to which element Vue wants to plug into, using el attribute) and the value that is going to be passed into DOM.
3. If we use Vue, the data and DOM is now linked, thus any change to the data will be immediately reflected on the view. It is reactive.
    - The way to experiment this is change the data value in browser console
    - Example:
        - var app = new Vue({el: "#app", data: "{ message: "any" }"})
        - we can just go to the browser console and change the variable app.message into the other string and after assigning the value, the view in DOM changes immediately.