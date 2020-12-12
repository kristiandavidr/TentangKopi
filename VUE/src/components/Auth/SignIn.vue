<template>
  <form class="form-signin" method="POST" @submit.prevent="login">
    <label class="label">
      <h1 class="h3 mb-3 font-weight-normal">Masuk ke akun</h1>
    </label>
    <label for="inputEmail" class="label sr-only">Email address</label>
    <input
      type="email"
      name="email"
      id="email"
      v-model="email"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="label sr-only">Password</label>
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
      class="form-control"
      placeholder="Password"
      required
    />
    <div class="checkbox mb-3">
      <label class="label">
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button
      class="label btn btn-lg btn-outline-light btn-block"
      type="submit"
      @click="login"
    >Sign in</button>
    <p class="mt-2 text-muted">
      Tidak punya akun? Daftar
      <router-link :to="{ name: 'SignUp' }">
        <a href="#">disini</a>
      </router-link>
    </p>
    <p class="mt-3 mb-3 text-muted">Tentang Kopi © 2020</p>
  </form>
</template>

<script>
import Axios from "axios";
export default {
  name: "SignIn",
  props: {
    msg: String
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    Axios.get("http://localhost:8000/user");
  },
  methods: {
    login() {
      Axios.post("http://localhost:8000/signin", {
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log("test");
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          console.log("error");
        });
      console.log("hello");
    }
  }
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
  border-color: whitesmoke;
  background-color: rgb(0, 0, 0, 0.3);
  border-left: black;
  border-right: black;
  border-top: black;
  border-bottom: black;
}

.form-signin .form-control:focus {
  z-index: 2;
  border-color: black;
  background-color: rgb(0, 0, 0, 0.6);
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.9);
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.label {
  color: whitesmoke;
  font-family: "open sans", sans-serif;
}
</style>