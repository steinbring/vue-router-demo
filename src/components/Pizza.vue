<template>
  <div class="pizza">

    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>{{selectedPizza.name}}</h1>
          <h2>Toppings:</h2>
          <ul>
            <li v-for="topping in selectedPizza.toppings" :key="topping" v-bind:value="topping">{{topping}}</li>
          </ul>
          <h2>Price:</h2>
          <p>
            Small: ${{selectedPizza.prices.small}}
          </p>
          <p>
            Large: ${{selectedPizza.prices.large}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pizza',
  props: {
    msg: String
  },
  computed: {
    selectedPizza: function() {
      return this.$parent.pizzas.find(value => value.slug === this.$route.params.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
