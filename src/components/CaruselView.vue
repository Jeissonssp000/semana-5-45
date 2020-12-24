<template>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption=""
      img-src="https://image.freepik.com/vector-gratis/ilustracion-concepto-email-marketing_114360-2081.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="https://image.freepik.com/vector-gratis/sistema-crm-retroalimenta-composicion-isometrica-dispositivo-movil-cuenta-usuario-purpura_1284-28827.jpg"
    ></b-carousel-slide>
    <b-carousel-slide
      caption=""
      img-src="https://image.freepik.com/vector-gratis/equipo-especialistas-lupa-portatil-flecha-marketing-digital-campana-ppc-concepto-relaciones-clientes-sobre-fondo-blanco_335657-1699.jpg"
    ></b-carousel-slide>
  </b-carousel>
</div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
    name:"CaruselView",
    data: () => ({
      reveal: false,
    }),
}

const options = {
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
</script>

<style>

</style>