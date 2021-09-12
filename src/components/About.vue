<template>
  <div class="about">

    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>About</h1>
          <p>This is a demo (similar to my <a href="https://vue-demo.jws.app/">Vue CLI demo</a>) of the very basics of <a href="https://router.vuejs.org/">Vue Router</a>.  This code lives at <a href="https://github.com/steinbring/vue-router-demo">github.com/steinbring/vue-router-demo</a>.</p>

          <p>This project uses <a href="https://blog.jws.app/tag/vue-js/">Vue</a>, <a href="https://blog.jws.app/tag/vue-router">Vue Router</a>, and <a href="https://blog.jws.app/tag/bulma/">Bulma</a>.  I purposely tried to keep it simple.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
