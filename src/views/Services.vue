<template>
  <div class="Services">
    <button
      class="btn btn-outline-info my-2 my-sm-0"
      type="submit"
      @click="logOutUser"
    >
      Salir
    </button>

    <ul class="list-group">
      <li class="list-group-item"><span>name: </span> {{ user.name }} </li>
      <li class="list-group-item"><span>email: </span> {{ user.email }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    logOutUser() {
      localStorage.removeItem("jwt");
      localStorage.removeItem("user");
      this.$router.push("/");
    },
    getUserData(){
      let token = localStorage.getItem('jwt');
      let user = localStorage.getItem('user');
      
      this.user = JSON.parse(user);
    }
  },
  created() {
    this.getUserData();
  }
};
</script>
