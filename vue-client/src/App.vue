// App.vue
<template>
  <MainLayout id="app">
    <AnimalList />
    <router-view />
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout";
import AnimalList from "./components/AnimalList"

export default {
  components: { 
    MainLayout,
    AnimalList
  }
};
</script>