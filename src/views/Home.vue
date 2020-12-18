<template>
  <div class="home">
    <section>
      <h1 class="texto">Bienvenido a nuestra plataforma virtual</h1>
    </section>
    <login-form />
    <img
      src="https://www.sojodesign.es/gifs/animaciones/gif-4.gif"
      alt="Megafono, megapromociones"
      srcset=""
    />
    <page-content msg="Para ti, todo de nosotros" style="background: beige" />
  </div>
</template>

<script>
// @ is an alias to /src
import PageContent from "@/components/PageContent.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Home",
  components: {
    PageContent,
    LoginForm,
  },
};
</script>

<style scoped>
h1 {
  font-family: "Langar", cursive;
  background: beige;
  padding: 45px;
}
</style>
