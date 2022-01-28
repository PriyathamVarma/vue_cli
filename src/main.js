import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/Footer.vue';

const app = createApp(App);

app.component('header',Header);
app.component('hello-world',HelloWorld);
app.component('footer',Footer);

app.mount('#app');
