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

    async getAllAnimals() {
      const response = await axios.get('http://localhost:8000/animals');
      this.animals = response.data
    }
  },
  mounted() {
    this.getAllAnimals();
  }
}
</script>