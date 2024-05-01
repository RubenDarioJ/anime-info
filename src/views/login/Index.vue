<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/api/auth/index'

const email = ref(<string> '')
const password = ref(<string> '')

const loginHandler = () => {
  login({ email: email.value, password: password.value })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log('finally')
    })
}
</script>

<template>
  <div class="bg-main">
    <header class="container">
      <img class="page-brand" src="./../../assets/images/pants-svgrepo-com.svg" alt="" srcset="">
    </header>
    <section class="auth-form-contain">
      <div class="login-form-container">
        <h3>Inicia sesión</h3>
        <form @submit.prevent="loginHandler">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            >
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">Password</label>
            <input
              v-model="password"
              type="password"
              id="inputPassword5"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            >
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-danger">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-brand {
  width: 100px;
  height: 100px;
}

.login-form-container {
  margin: 0 auto;
  max-width: 400px;
  padding: 48px 68px;
  background-color: rgba(0,0,0,0.4);
  border-radius: 4px;
  color: white;
}

.bg-main {
  min-height: 100vh;
  background-image: url('https://static.vecteezy.com/system/resources/thumbnails/036/431/995/small_2x/ai-generated-colorful-starry-sky-with-sunset-background-in-anime-style-generative-ai-photo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
