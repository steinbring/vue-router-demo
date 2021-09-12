import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

import About from './components/About.vue';
import Pizza from './components/Pizza.vue';
import PizzaListing from './components/PizzaListing.vue';

const routes = [
  { path: '/', component: About },
  { path: '/pizza/:id', component: Pizza },
  { path: '/pizzalisting', component: PizzaListing }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
