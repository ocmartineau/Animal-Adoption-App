<template>
  
</template>

<script>
import axios from 'axios';



export default {
  name: 'AnimalList',
  data() {
    return{animals: []}
  },
  methods: {

    getAllAnimals() {
      axios.get('http://localhost:8000/animals')
      .then(function(response){
        console.log(response);
        this.animals = response.data;
      })
      
    }
  },
  mounted() {
    this.getAllAnimals();
  }
}
</script>