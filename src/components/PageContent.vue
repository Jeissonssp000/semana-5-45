<template>
  <div class="page-content">
    <v-app id="inspire">
      <v-main class="grey lighten-2">
        <v-container>
          <v-row>
            <v-col cols="12" sm="2">
              <v-sheet rounded="lg" min-height="268">
                <!--  -->
                <img
                  class="imagen-three"
                  src="https://i.pinimg.com/474x/ab/26/67/ab26674c342e4e05d488ae20e24065c1.jpg"
                  alt="Avatar"
                />
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="8">
              <v-sheet min-height="70vh" rounded="lg">
                <!--  -->
                <img
                  class="imagen-three-center"
                  src="https://www.sojodesign.es/gifs/animaciones/gif-4.gif"
                  alt="Megafono, megapromociones"
                  srcset=""
                />
              </v-sheet>
            </v-col>

            <v-col cols="12" sm="2">
              <v-sheet rounded="lg" min-height="268">
                <!--  -->
                <img
                  class="imagen-three"
                  src="https://i.pinimg.com/originals/64/f2/92/64f292f3eb69b73f0a7928e7143264ee.jpg"
                  alt="Megafono, megapromociones"
                  srcset=""
                />
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
    <hr />
    <img
      src="https://3.bp.blogspot.com/-J8lZmpbKGr8/UfPavPl2OVI/AAAAAAAAtls/SXj4RSFWdbc/s1600/ivyvine.gif"
      alt=""
      srcset=""
    />
    <h1>Para tí, todo de nosotros</h1>
    <h3>Nuestros productos, pensados para tí</h3>
    <div class="container pb-5 pt-4">
      <div class="row">
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
        <card-expand />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardExpand from "./CardExpand.vue";

export default {
  name: "PageContent",
  components: {
    CardExpand,
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

h1 {
  font-family: "Langar", cursive;
  padding-left: 45px;
}
h3 {
  font-family: "Langar", cursive;
  padding-left: 45px;
}
</style>
