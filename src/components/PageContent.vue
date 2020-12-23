<template>
  <div class="container">
    
    <div>
      <v-parallax
        dark
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <v-container>
              <v-row>
                <v-col cols="13" sm="2">
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
                      src="https://i.pinimg.com/474x/ab/26/67/ab26674c342e4e05d488ae20e24065c1.jpg"
                      alt="Avatar"
                    />
                  </v-sheet>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <hr />
    <img
      src="https://3.bp.blogspot.com/-J8lZmpbKGr8/UfPavPl2OVI/AAAAAAAAtls/SXj4RSFWdbc/s1600/ivyvine.gif"
      alt=""
      srcset=""
    />
    <h1>- Ponemos de nuestra parte -</h1>
    <h3>Nuestros productos, pensados para tí</h3>
    <div class="container pb-5 pt-4">
      <div class="row">
        <card-expand v-for="p in prices" :key="p"/>
      </div>
    </div>
    <carusel-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardExpand from "./CardExpand.vue";
import CaruselView from './CaruselView.vue';

export default {
  name: "PageContent",
  data(){
    return{
      prices: [8400, 1500, 2550, 3200, 6200, 1700, 2800]
    }
  },
  components: {
    CardExpand,
    CaruselView,
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
