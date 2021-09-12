<template>
  <div class="pizzalisting">

    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Pizza Listing</h1>
          
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Toppings</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pizza in $parent.pizzas" :key="pizza" v-bind:value="pizza">
                <td><router-link :to="{path: '/pizza/' + pizza.slug}" class="navbar-item">{{ pizza.name }}</router-link></td>
                <td>
                  <ul>
                    <li v-for="topping in pizza.toppings" :key="topping" v-bind:value="topping">{{topping}}</li>
                  </ul>
                </td>
                <td>
                  Small: ${{pizza.prices.small}}
                  Large: ${{pizza.prices.large}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaListing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
