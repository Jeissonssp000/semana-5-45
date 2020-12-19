<template>
  <div class="page-content">
    <v-app id="inspire" class="home">
    <v-main class="grey lighten-3">
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
    <div class="container"></div>
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
      <h1 style="margin-top: 40px;">Nuestros productos, pensados para tí</h1>
      <div class="row">
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
        <card-expand/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardView from "@/components/CardView.vue";
import CardExpand from './CardExpand.vue';

export default {
  name: "PageContent",
  props: {
    msg: String,
  },
  components: {
    CardView,
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
</style>
