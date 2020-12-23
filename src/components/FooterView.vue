<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo white--text text-center"
      style="width: 100%"
    >
      <v-card-text>
        <v-btn
          v-for="(icon,i) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
          :href="enlaces[i]"
          target="_blank"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text">
        <v-list class="indigo text-md-left">
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-email-outline </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>prueba@gmail.com</v-list-item-title>
              <v-list-item-title>ejemplo@gmail.com</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon> mdi-phone </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>222 22 22</v-list-item-title>
              <v-list-item-title>300 123 45 67</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        Ofreecemos nuestros servicios en toda Colombia.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Grupo 45</strong> —
        <v-btn 
          class="mx-2 white--text"
          outlined
          color="white"
          href="https://github.com/Jeissonssp000/semana-5-45.git"
          target="_blank"
        >
          <v-icon 
            left 
            dark
          >
           mdi-code-tags
          </v-icon>
          Código
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterView",
  data: () => ({
    icons: [
      "mdi-facebook", 
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram"
      ],
    enlaces: [
      'https://www.facebook.com',
      'https://www.twitter.com',
      'https://www.linkedin.com',
      'https://www.instagram.com',
    ],
  }),
};
</script>
