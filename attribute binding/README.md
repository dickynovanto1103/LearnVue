### Attribute Binding
1. In this experiment, I experimented attribute binding in Vue
2. The use case for this is instead of putting the attribute value directly inside the HTML file, we want to have a centralized place for the attribute value in Vue data, and we pass the data into HTML using binding (v-bind:attribute)
3. Example: <img id="pic1" v-bind:src="image">. First, we create Vue binding by creating new Vue instance with element "pic1", then we create data: image, and we fill the image data with the file path of the image, and the image will show. We can put the v-bind to bind the attribute src to the expression "image"
4. There is also the shorthand of the v-bind:attribute = <img :src="image">, we can just omit the keyword v-bind.