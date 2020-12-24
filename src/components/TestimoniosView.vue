<template>
    <v-row >
      <v-card class="mx-auto" color="#26c6da" dark max-width="350">
        <v-card-title>
          <v-icon large left> mdi-twitter </v-icon>
          <span class="title font-weight-light">Twitter</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          "Contraté el servicio de Sistema de regalos, mis clientes no pueden
          estar más felices y además aumentamos 30% nuestras ventas."
        </v-card-text>

        <v-card-actions>
          <v-col>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title>María Martinez</v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" color="#3b5998" dark max-width="350">
        <v-card-title>
          <v-icon large left> mdi-facebook </v-icon>
          <span class="title font-weight-light">facebook</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          "Me encanto su atención."
        </v-card-text>

        <v-card-actions>
          <v-col>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title>Juan Peréz</v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" color="#26c6da" dark max-width="350">
        <v-card-title>
          <v-icon large left> mdi-twitter </v-icon>
          <span class="title font-weight-light">Twitter</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold">
          "Los mejores en sistemas de referidos"
        </v-card-text>

        <v-card-actions>
          <v-col>
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-list-item-avatar>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title>Ernesto solarte</v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-row>
</template>

<script>
export default {
  name: "TestimoniosView",
  data: () => ({
    show: false,
  }),
};
</script>