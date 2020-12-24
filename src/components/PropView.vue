<template>
  <v-sheet
    height="auto"
    class="overflow-hidden"
    style="position: relative"
  >
    <v-container class="mt-14" >
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">
          Ingresa en nuestra plataforma
        </v-btn>
      </v-row>
      <carusel-view/>
      <page-content />
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <login-form />
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import CaruselView from './CaruselView.vue';
import LoginForm from "./LoginForm.vue";
import PageContent from "./PageContent.vue";
export default {
  components: { LoginForm, PageContent, CaruselView},
  name: "PropView",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
};
</script>
