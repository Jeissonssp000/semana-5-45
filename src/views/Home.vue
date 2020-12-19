<template>
  <v-app id="inspire" class="home">
    <v-app-bar app color="#77a0e0" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="36"
      ></v-avatar>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="80"
        ><img
          class="avatar-principal"
          src="https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg"
          alt="Avatar"
      /></v-avatar>
      <h1 class="texto">Bienvenido a nuestra plataforma virtual</h1>
      <v-btn depressed color="primary">
        Primary
      </v-btn>
    </v-app-bar>

    <!-- <page-content msg="Para ti, todo de nosotros" style="background: beige" /> -->
    <prop-view/>
    <footer-view></footer-view>
  </v-app>
</template>

<script>
// @ is an alias to /src
import FooterView from "../components/FooterView.vue";
import PropView from '../components/PropView.vue';

export default {
  name: "Home",
  components: {
    FooterView,
    PropView,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Langar", cursive;
  padding-left: 45px;
}
.avatar-principal {
  object-fit: cover;
  width: 100%;
}
</style>
