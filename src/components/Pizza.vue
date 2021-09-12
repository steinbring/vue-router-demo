<template>
  <div class="pizza">

    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Pizza</h1>
          <p>This is the pizza vue file.</p>

          {{ $route.params.id }}

          {{selectedPizza}}
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
