<template>
  <div class="login-form">
    <form>
      <div class="container">
        <hr>
        <h3>¿Deseas ingresar?</h3>
        <div class="mx-auto mt-5" style="width: auto; border-radius: 10px">
            <hr>
          <div class="form-group">
            <label for="exampleInputEmail1">Dirección de correo</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="login.email"
            />
            <!-- con v-model="login.email estoy accediendo al data y asignandole lo que ingrese en el input" -->
            <small id="emailHelp" class="form-text text-muted"></small>
            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="login.password"
            />
          </div>
          <hr>
          <button
            class="btn btn-outline-info my-2 my-sm-0"
            type="submit"
            @click.prevent="loginUser"
          >
            Ingresar
          </button>
          <hr>
        </div>
        <!-- con @click.prevent="loginUser" llamo al metodo dentro del script -->
        <!-- con este pre, estoy mostrando en vivo y en direcito lo que va escribiendo el usuario dentro de los inputs -->
        <!-- <pre>
          {{ login }}
        </pre> -->
      </div>
    </form>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "login-form",
  props: {},
  // con este data obtengo un sitio donde poner los datos del input
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  // con este methods añado metodos para enlazar con acciones como el click
  methods: {
    async loginUser() {
      // este let permite enviar información a nuestra api $http es el valor por defecto que escribimos en main.js
      try {
        // let response = await this.$http.post("/api/usuario/login", this.login);
        let response = await this.$http.post("/api/usuario/login", this.login);
        console.log(response);
        let token = response.data.accessToken;

        let response2 = await this.$http.get("/api/auth");
        let user = response2.data[0];

        console.log(response2, user);

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (token) {
          this.$router.push("/services");
          swal(
            "Yep!",
            `Bienvenido de regreso! disfruta tu estancia ${user.name}`,
            "success"
          );
        }
      } catch (error) {
        swal("Nope!", "Algo salio mal, intenta de nuevo!", "error");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-family: "Langar", cursive;
}
</style>
