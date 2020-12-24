<template>
  <div class="container">
    <div>
      <v-parallax
        height="600"
        dark
        src="https://image.freepik.com/vector-gratis/gente-diminuta-comercializador-megafono-analisis-datos-consumidores-marketing-basado-datos-analisis-comportamiento-consumidor-concepto-tendencia-marketing-digital_335657-2423.jpg"
      >
      <v-sheet 
        class="py-5 mx-16 white--text text-center"
        rounded="lg"
        color="rgb(186, 104, 200, 0.5)"
      >
      <h1 class="font-weight-black mx-5">
        40% más ventas de nuestros clientes demuestran la calidad de nuestros servicios. <br><br> Descubre cómo lo hacemos.
      </h1>
      </v-sheet>
      </v-parallax>
    </div>
    <hr />
    <img
      src="https://3.bp.blogspot.com/-J8lZmpbKGr8/UfPavPl2OVI/AAAAAAAAtls/SXj4RSFWdbc/s1600/ivyvine.gif"
      alt=""
      srcset=""
    />
    <h1>- Ponemos de nuestra parte -</h1>
    <h3>Nuestros servicios, pensados para tí</h3>
    <hr />
    <cardos-expand/>
    <hr />
    <h1>- Opiniones de nuestros clientes -</h1>
    <hr />
    <testimonios-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardExpand from "./CardExpand.vue";
import CardosExpand from "./CardosExpand.vue";
import TestimoniosView from "./TestimoniosView.vue";

export default {
  name: "PageContent",
  data() {
    return {
      
    };
  },
  components: {
    CardExpand,
    CardosExpand,
    TestimoniosView,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagen-three-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 100%;
}

.imagen-three {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 100%;
  /* height: 100%; */
}

h1,
h3 {
  font-family: "Langar", cursive;
  padding-left: 45px;
}
</style>
