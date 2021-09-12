<template>
  <div class="pizza">

    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Pizza</h1>
          <p>This is the pizza vue file.</p>

          {{ $route.params.id }}
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
