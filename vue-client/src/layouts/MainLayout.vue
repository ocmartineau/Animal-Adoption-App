// MainLayout.vue
<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <slot />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import AnimalList from '../components/AnimalList'

export default {
  components: { 
    Header,
    AnimalList, 
    Footer
  }
};

</script>