<template>

<div id="app">

    <Header v-on:dataComingFromHeader="triggerWhenDataArrivedFromHeader" msg = "Header" />

   
    <HelloWorld 
      comp1="Add Products"
      comp2="Products List"
      comp3="Cart Details "
      is-good= "1"
      v-on:is-good-event = 'changeGoodEvent'
        />

    <Footer msg = "Footer" v-bind:displayToFooter="display"/>

</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  emits:['dataComingFromHeader'],
  components: {

    HelloWorld,
    Header,
    Footer,
 
    
  },
  //provide
  provide:{

    name: "dataForChilds",

  },
  //data
  data(){
    return{
      display : '',
    }
  },
  //methods
  methods:{
    changeGoodEvent(value){
      console.log('You entered emit function',value)//observe how this value which is index came from child component

    },
    triggerWhenDataArrivedFromHeader(data){
      console.log(data);
      this.display = data;
      console.log('the display from app.vue',this.display);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
