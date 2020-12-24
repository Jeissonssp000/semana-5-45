<template>
    <v-container>
      <v-row :justify="center">
        <v-col>
          <v-card class="mx-auto" max-width="350">
            <v-img
              src="https://image.freepik.com/vector-gratis/recomiende-concepto-amigo-ilustrado_52683-24324.jpg"
              height="350px"
            ></v-img>

            <v-card-title class="justify-center">
              Códigos de referidos
            </v-card-title>

            <v-card-subtitle class="py-1">
              Fortalezca la relación entre su empresa y sus consumidores.
            </v-card-subtitle>

            <v-card-actions>
              <div class="mx-2 orange--text">Conozca cómo</div>

              <v-btn class="mx-4" icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Implementamos en la página web de su empresa un sistema para
                  generar códigos de referidos que los clientes pueden compartir
                  con otros y otorgan beneficios como descuentos o regalos,
                  fortaleciendo la relación entre su empresa y sus consumidores
                  y obteniendo nuevos clientes.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="350">
            <v-img
              src="https://image.freepik.com/vector-gratis/ilustracion-concepto-newsletter_114360-777.jpg"
              height="350px"
            ></v-img>

            <v-card-title class="justify-center px-14">
              Sistema de inscripción a boletín informativo
            </v-card-title>

            <v-card-subtitle class="py-1">
              Aumente el posicionamiento de su marca en la mente de sus
              clientes.
            </v-card-subtitle>

            <v-card-actions>
              <div class="mx-2 orange--text">Conozca cómo</div>

              <v-btn class="mx-4" icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Implementamos en la página web de su empresa un sistema de
                  inscripción a boletín informativo para comunicar novedades,
                  descuentos especiales e información de concursos y otros
                  beneficios especiales para sus afiliados, manteniendo así una
                  interacción entre su empresa y sus consumidores y mejorando el
                  posicionamiento de su marca en la mente de sus clientes.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
        <v-card class="mx-auto" max-width="350">
          <v-img
            src="https://image.freepik.com/vector-gratis/sistema-crm-retroalimenta-composicion-isometrica-dispositivo-movil-cuenta-usuario-purpura_1284-28827.jpg"
            height="350px"
          ></v-img>

          <v-card-title class="justify-center">
            Sistema de regalos
          </v-card-title>

          <v-card-subtitle class="py-1">
            Premie la fidelidad de sus clientes y genere múltiples beneficios para su empresa.
          </v-card-subtitle>

          <v-card-actions>
            <div class="mx-2 orange--text">Conozca cómo</div>

            <v-btn class="mx-4" icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                Crear en la página web de su empresa un sistema de regalos para
                sus clientes que otorguen premios por distintas actividades
                realizadas por el cliente como compartir las publicaciones de su
                empresa en redes sociales, realizar historias en las cuales
                etiqueten las redes de su empresa, escribir su opinión de los
                productos o servicios de su empresa, entre otras actividades, de
                esta forma se premia al cliente y se generan bastantes
                beneficios para su empresa.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
export default {
    name: "CardosExpand",
  data: () => ({
    show: false,
  }),
};
</script>