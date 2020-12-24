<template>
  <div>
    <div class="mt-4">
      <b-card
        img-src="https://image.freepik.com/vector-gratis/recomiende-concepto-amigo-ilustrado_52683-24324.jpg "
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <b>Códigos de referidos: </b>
          Implementamos en la página web de su empresa un sistema para generar
          códigos de referidos que los clientes pueden compartir con otros y
          otorgan beneficios como descuentos o regalos, fortaleciendo la
          relación entre su empresa y sus consumidores y obteniendo nuevos
          clientes.
        </b-card-text>
      </b-card>

      <b-card
        img-src="https://image.freepik.com/vector-gratis/ilustracion-concepto-newsletter_114360-777.jpg"
        img-alt="Card image"
        img-right
      >
        <b-card-text>
          <b>Sistema de inscripción a boletín informativo: </b>
          Implementamos en la página web de su empresa un sistema de inscripción
          a boletín informativo para comunicar novedades, descuentos especiales
          e información de concursos y otros beneficios especiales para sus
          afiliados, manteniendo así una interacción entre su empresa y sus
          consumidores y mejorando el posicionamiento de su marca en la mente de
          sus clientes.
        </b-card-text>
      </b-card>

      <b-card
        img-src="https://image.freepik.com/vector-gratis/sistema-crm-retroalimenta-composicion-isometrica-dispositivo-movil-cuenta-usuario-purpura_1284-28827.jpg"
        img-alt="Card image"
        img-left
        class="mb-3"
      >
        <b-card-text>
          <b>Sistema de regalos: </b>
          Crear en la página web de su empresa un sistema de regalos para sus
          clientes que otorguen premios por distintas actividades realizadas por
          el cliente como compartir las publicaciones de su empresa en redes
          sociales, realizar historias en las cuales etiqueten las redes de su
          empresa, escribir su opinión de los productos o servicios de su
          empresa, entre otras actividades, de esta forma se premia al cliente y
          se generan bastantes beneficios para su empresa.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardExpand",
  data: () => ({
    reveal: false,
  }),
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
