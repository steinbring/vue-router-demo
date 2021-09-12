<template>
  <div id="app">
    <!-- START: The Bulma Navbar -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <b>Pizza-Based Demo</b>
        </router-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
  export default {}
</script>

<style>

</style>
