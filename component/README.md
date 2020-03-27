### Component
This is just a simple explanation of a component
1. Component is created before creating the vue instance
2. Keyword: Vue.component
3. How to create
    Vue.component("component-name", {
        props: ["list of props name"],
        template: "<html template>"
    })
4. Then in html code, we just create <component-name v-bind:propsName="props to be passed"></component-name>