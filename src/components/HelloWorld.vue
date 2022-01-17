<template>
  <div class="hello">
    <div class="container mt-5">
      
      <div class="row">
        <div class="col-sm-4">
          <h3>{{comp1}}</h3><br/>
         

          <form v-on:submit.prevent="formSubmit" style="border:solid grey;padding:10px 20px">
    
                <div class="mb-3 mt-3">
                  <label for="name">Name of the product:</label>
                  <input type="name" class="form-control" id="name" placeholder="Enter product name" name="name">
                </div>
    
                <div class="mb-3">
                  <label for="numb">Quantity:</label>
                  <input type="number" class="form-control" id="numb" placeholder="Enter Quantity" name="numb">
                </div>
    
                <div class="mb-3">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter Description" name="description">
                  </div>

                  <div class="mb-3">
                    <label for="price">Price:</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter Price" name="price">
                  </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>

        </div>
        <div class="col-sm-4">
          <h3>{{comp2}}</h3><br/>
    
            <ul><!-- product cards ---->
                <div class="card" v-for="(items,index) in itmesList" :key="index">
                    <div class="card-body">
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
export default {
  name: 'HelloWorld',
  
  data(){

    return{
      dataInfo : "hai",
      cart : 0,
      itmesList :[
                      {id:1, name:'product 1', description:'', qty : 0 , price : 2},
                      {id:2, name:'product 2', description:'', qty : 0 , price : 2},
                  ],

      total: 0,
               
    }

  },

  //methods
  methods:{

    //getting form values
    formSubmit(event){
      

      let id = this.itmesList[this.itmesList.length-1].id + 1;
      let name = event.target.elements.name.value;
      let qty = parseFloat(event.target.elements.numb.value);
      let description = event.target.elements.description.value;
      let price = parseFloat(event.target.elements.price.value);

      let insertedItem = {id: id, name:name, description:description, qty:qty, price:price};

      this.itmesList.push(insertedItem);

      console.log(this.itmesList);

    },

    //deleting the list
    delteItem(index){

      this.itmesList.splice(index,1);

    },


    incrementItem(index){
      this.cart = this.cart +1;
      this.itmesList[index].qty ++;

      this.total = this.total + this.itmesList[index].price;

    },

    decrementItem(index){
      this.cart = this.cart -1;
      this.itmesList[index].qty --;

      this.total = this.total - this.itmesList[index].price;

    },


  },

  //computed properties
  computed:{

    price(){

      return this.total;

    },

  },

  //props

  props: {
    comp1: String,
    comp2: String,
    comp3: String
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
