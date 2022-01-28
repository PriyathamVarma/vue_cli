<template>
<div class="container-fluid p-5 bg-warning text-white text-center mb-0" v-if="displayToFooter">
  <h1>Footer Component {{displayToFooter}}</h1>
</div>
</template>

<script>
export default {
  name: 'Footer',
    props: {
      msg: String,
      displayToFooter : Boolean,
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
div{
    margin-top:7
    vh;
}
</style>
