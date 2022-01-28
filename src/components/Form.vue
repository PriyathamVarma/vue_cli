

<template>
{{name}}
    <form v-on:submit.prevent="formSubmit" style="border:solid grey;padding:10px 20px">
    
                <div class="mb-3 mt-3">
                    
                  <label for="name">Name of the product: </label>
                  <input type="name" class="form-control" id="name" placeholder="Enter product name" name="name" required/>
                </div>
    
                <div class="mb-3">
                  <label for="numb">Quantity:</label>
                  <input type="number" class="form-control" id="numb" placeholder="Enter Quantity" name="numb" required/>
                </div>
    
                <div class="mb-3">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" id="description" placeholder="Enter Description" name="description" required/>
                  </div>

                  <div class="mb-3">
                    <label for="price">Price:</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter Price" name="price" required/>
                  </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    
</template>

<script>

export default {
    
  name: 'Form',

    props:{

    itmesListForProps : Array,

  },
  //options API

  inject:["name"],

  //methods

  methods:{


       //getting form values
    formSubmit(event){

        
      

      let id = this.itmesListForProps[this.itmesListForProps.length-1].id + 1;
      let name = event.target.elements.name.value;
      let qty = parseFloat(event.target.elements.numb.value);
      let description = event.target.elements.description.value;
      let price = parseFloat(event.target.elements.price.value);

      let insertedItem = {id: id, name:name, description:description, qty:qty, price:price};

      //this.itmesList.push(insertedItem);
      //console.log(this.itmesListForProps);
      //console.log('before values');

      this.$emit('props-change',insertedItem);


    },
  }

};
</script>






