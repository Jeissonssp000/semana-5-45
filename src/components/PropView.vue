<template>
  <v-sheet
    height="auto"
    class="overflow-hidden"
    style="position: relative; margin-top: 64px;"
  >
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="pink" dark @click.stop="drawer = !drawer">
          Ingresa en nuestra plataforma
        </v-btn>
      </v-row>
      <page-content style="background: beige" />
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <login-form />
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import LoginForm from "./LoginForm.vue";
import PageContent from "./PageContent.vue";
export default {
  components: { LoginForm, PageContent },
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
