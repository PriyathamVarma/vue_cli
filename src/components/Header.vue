<template>
<slot-component>
<div class="container-fluid p-5 bg-warning text-white text-center">
  <h1>My First Vue based E-commerce {{msg}} page</h1>
  <p>Done using Vue CLI</p> 
  <button class="btn btn-dark" v-on:click="dataFromHeader">Click</button>
</div>
</slot-component>
</template>

<script>
export default {
  name: 'Header',
  props: {
      msg: String
      },
      //data
      data(){
        return{
          display: false,
        }
      },
      //methods
      methods:{
        dataFromHeader(){
          this.display = !this.display;
          this.$emit('dataComingFromHeader',this.display);
        }
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
