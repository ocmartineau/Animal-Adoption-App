// main.js
import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

Vue.use(Buefy);
Vue.config.productionTip = false

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
