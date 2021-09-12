<template>
  <div id="app">
    <!-- START: The Bulma Navbar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <b>Pizza-Based Demo</b>
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  onclick="document.getElementById('navbarBasicExample').classList.toggle('is-active');">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/pizza/ebf" class="navbar-item">Joe's Favorite Pizza</router-link>
          <router-link to="/pizzalisting" class="navbar-item">Pizza Listing</router-link>
        </div>
      </div>
    </nav>
    <!-- END: The Bulma Navbar -->

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        // This is the central store of what pizzas are offered
        pizzas : [
          {
            slug : 'cheese',
            name : 'Cheese',
            toppings : ['Cheese'],
            prices : { small : '12.25', large: '13.75' }
          },
          {
            slug : 'cheese-and-sausage',
            name : 'Cheese and Sausage ',
            toppings : ['Cheese', 'Sausage'],
            prices : { small : '13.50', large: '15.50' }
          },
          {
            slug : 'special',
            name : 'Special',
            toppings : ['Cheese', 'Sausage', 'Mushrooms', 'Onions'],
            prices : { small : '15.25', large: '17.75' }
          },
          {
            slug : 'ebf',
            name : 'Everything But Fish (Anchovies)',
            toppings : ['Cheese', 'Sausage', 'Pepperoni', 'Mushrooms', 'Onions', 'Green Peppers', 'Black Olives'],
            prices : { small : '19.75', large: '23.00' }
          },
          {
            slug : 'everything',
            name : 'Everything',
            toppings : ['Cheese', 'Sausage', 'Pepperoni', 'Mushrooms', 'Onions', 'Green Peppers', 'Black Olives'],
            prices : { small : '23.25', large: '25.75' }
          }
        ]
      }
    }
  }
</script>

<style>

</style>
