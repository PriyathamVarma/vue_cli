import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/Footer.vue';
import SlotComponent from './components/SlotComponent.vue';

const app = createApp(App);
// Only register global components otherwise all the components will be rendered
app.component('header',Header);
app.component('hello-world',HelloWorld);
app.component('footer',Footer);

//for slots
app.component('slot-component',SlotComponent);

app.mount('#app');
