<template>
  <div class="cardview">
    <div class="card" style="width: 15rem; height: 20rem;">
      <img :src="img" class="card-img-top" :alt="nombre" style="height: 8rem;">
      <div class="card-body">
        <h5 class="card-title">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardView',
  props: {
    nombre: String,
    descripcion: String,
    img: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>