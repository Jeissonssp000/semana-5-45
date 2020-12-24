<template>
  <v-carousel
    :show-arrows="false"
    cycle
    hide-delimiter-background
    delimiter-icon="mdi-minus"
    interval="4000"
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "CarruselView",
  data() {
    return {
      items: [
        {
          src:
            "https://image.freepik.com/vector-gratis/clientes-que-comparten-referencias-ganan-dinero_74855-5231.jpg",
        },
        {
          src:
            "https://image.freepik.com/vector-gratis/gente-corriendo-ilustracion-concepto-pantalla-telefono_52683-23438.jpg",
        },
        {
          src:
            "https://image.freepik.com/vector-gratis/equipo-especialistas-lupa-portatil-flecha-marketing-digital-campana-ppc-concepto-relaciones-clientes-sobre-fondo-blanco_335657-1699.jpg",
        },
        {
            src: "https://www.sojodesign.es/gifs/animaciones/gif-4.gif",
        },
      ],
    };
  },
};
</script>