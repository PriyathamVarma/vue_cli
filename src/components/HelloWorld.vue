<template>
  <div class="hello grab">
    <div class="container mt-5">
      
      <div class="row">

        <div class="col-sm-4">

          <h3 >{{comp1}} {{ isGood === '1' ? 'Visible' : 'Not Visible' }}</h3><br/>
          
         
          <Form v-on:props-change="formdata" :itmesListForProps="itmesList"/>    
          
        </div>

        <div class="col-sm-4">
          <h3>{{comp2}}</h3><br/>
    
            <ul><!-- product cards ---->
                <div class="card" v-for="(items,index) in itmesList" :key="index">
                    <div class="card-body" v-if="index!=0">
                        <h4 class="card-title"> {{items.name}} (£ {{items.price}} each)<span style="float:right;cursor:pointer" @click="delteItem(index)">	&#10006; </span> </h4>
                        <hr/>
                        <div class="row">
                            <div class="col-sm-6">
                                <p class="card-text"> QTY: {{items.qty}}</p>
                                <span>
                                    <button class="btn btn-primary" @click="incrementItem(index)"> ADD </button>
                                    <button class="btn btn-danger" @click="decrementItem(index)"> Remove </button>
                                </span>
                            </div>
                            <div class="col-sm-6">
                                <h5>Product Description:</h5>
                                <p>{{items.description}}</p>
                            </div>
                        </div>               
                    </div>
                </div>
        
        </ul>
        </div>

        <div class="col-sm-4">
          <h3>{{comp3}}</h3><br/>      

          <div class="card pt-5">
            <div class="card-head"><h4> You added <u> {{ cart }} </u> Items to the cart</h4></div>
            <div class="card-body">

              <ol>
                <li v-for="(values,index) in itmesList" :key="index" ><span v-if="values.qty != 0"> {{values.name}} , QTY(selected): {{values.qty}} </span>  </li>
               </ol>

               Total Price : £ {{price}}

            </div>
            <div class="card-footer"></div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Form from './Form.vue'
export default {
  
  name: 'HelloWorld',

  components:{
    Form
  },
  


  data(){

    return{
      dataInfo : "hai",
      cart : 0,
      itmesList :[
                      {id:0, name:'test product', description:'', qty : 0 , price : 0},
                      {id:1, name:'product 2',    description:'', qty : 0 , price : 21},
                  ],

      itmesListForProps : this.itmesList,            

      total: 0,
               
    }

  },

  //methods
  methods:{

   //look for form.vue for form submit

    //deleting the list
    delteItem(index){

      this.itmesList.splice(index,1);

    },


    incrementItem(index){
      this.cart = this.cart +1;
      this.itmesList[index].qty ++;

      this.total = this.total + this.itmesList[index].price;

      //emit changes to parent component app
      this.$emit('is-good-event',index);

    },

    decrementItem(index){
      this.cart = this.cart -1;
      this.itmesList[index].qty --;

      this.total = this.total - this.itmesList[index].price;

    },

    //catching the data from form.vue
    formdata(data){

      this.itmesList.push(data);
      console.log("the data received to parent component");
      console.log(data);

      //props-change
      // the data is recieved from emits from Form component


    }


  },

  //computed properties
  computed:{

    price(){

      return this.total;

    },

  },

  //props

  props: {

    comp1:{
      type: String,
      required: true,
      default: 'Add Products',
      //use validator for validating
      validator: function(value){
        return value ;
      }
    },
    comp2: String,
    comp3: String,
    isGood : String,
  // String, Number, Boolean, Array, Object, date, Function are the other types available for props
  },

  // emits for parent components
  emits:{
    //use here instaed of inside methods
    'is-good-event': function(id){

      if (id){
        return true;
      }
      else{
        return false;
      }

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
.grab {cursor: -webkit-grab; cursor: grab;}
</style>
