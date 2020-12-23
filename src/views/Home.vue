<template>
  <v-app id="inspire" class="home">
    <v-app-bar app color="#2661bd" flat>
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
          src="https://i2.wp.com/capitaliafamiliar.es/wp-content/uploads/2018/06/megafono.png?ssl=1"
          alt="Avatar"
      /></v-avatar>
      <v-btn depressed color="primary" >
      <h1 class="texto">Box-Com</h1>
        Primary
      </v-btn>
    </v-app-bar>

    <!-- <page-content msg="Para ti, todo de nosotros" style="background: beige" /> -->
    <banner-view/>
    <prop-view/>
    <footer-view></footer-view>
  </v-app>
</template>

<script>
import BannerView from '../components/BannerView.vue';
// @ is an alias to /src
import FooterView from "../components/FooterView.vue";
import PropView from '../components/PropView.vue';

export default {
  name: "Home",
  components: {
    FooterView,
    PropView,
    BannerView,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Langar", cursive;
  padding-left: 45px;
  color: aliceblue;
}
.avatar-principal {
  object-fit: cover;
  width: 100%;
}
</style>
