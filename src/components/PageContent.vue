<template>
  <div class="page-content">
    <h1>{{ msg }}</h1>
    <div class="container pb-5 pt-4">
      <div class="row">
        <div class="col-3">
          <CardView
            img="https://www.claro.com.co/portal/co/recursos_contenido/1528468157923.jpg"
            nombre="Servicio al cliente"
            descripcion="Quieres comunicarte con nosotros?"
          />
        </div>
        <div class="col-3">
          <CardView
            img="https://lapiedradesisifo.com/wp-content/uploads/2019/07/shutterstock_1422087224.jpg"
            nombre="Audioboo-K"
            descripcion="Nuestro servicio de audio libros"
          />
        </div>
        <div class="col-3">
          <CardView
            img="https://www.claro.com.co/portal/recursos/co/cpp/promociones/imagenes/1553802001564-5-og-sim-card-gratis.jpg"
            nombre="Adquiere una..."
            descripcion="Nuestra POWER-SIM te recargara de energía"
          />
        </div>
        <div class="col-3">
          <CardView
            img="https://st.depositphotos.com/2234518/2770/i/600/depositphotos_27701395-stock-photo-attractive-woman-with-megaphone.jpg"
            nombre="Trabaja con nosotros"
            descripcion="Deseas saber como? entra al enlace..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardView from "@/components/CardView.vue";

export default {
  name: "PageContent",
  props: {
    msg: String,
  },
  components: {
    CardView,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  font-family: 'Langar', cursive;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
