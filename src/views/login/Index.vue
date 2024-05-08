<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/api/auth/index'
import FooterComponent from '@/views/login/Footer.vue'

const email = ref(<string>'')
const password = ref(<string>'')

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
      <div class="header-items">
        <img class="page-brand" src="@/assets/netflix.svg" alt="" srcset="" />
        <div></div>
      </div>
    </header>
    <section class="auth-form-contain">
      <!-- <v-btn class="btn btn-success" @click="$i18n.locale = 'en'">EN</v-btn>
      <v-btn class="btn btn-success" @click="$i18n.locale = 'es'">ES</v-btn> -->
      <div class="login-form-container">
        <h4 class="mb-4">{{ $t('title') }}</h4>
        <form @submit.prevent="loginHandler">
          <div class="mb-3">
            <!-- <label for="exampleFormControlInput1" class="form-label">Email address</label> -->
            <input
              v-model="email"
              type="email"
              class="form-control input-color"
              id="exampleFormControlInput1"
              :placeholder="$t('login.email')"
              required
            />
          </div>
          <div class="mb-3">
            <!-- <label for="inputPassword5" class="form-label">Password</label> -->
            <input
              v-model="password"
              type="password"
              id="inputPassword5"
              class="form-control custom-input input-color"
              aria-describedby="passwordHelpBlock"
              :placeholder="$t('login.password')"
              required
            />
          </div>
          <div class="d-grid gap-2 text-center text-size">
            <button class="btn btn-danger">{{ $t('sign-in') }}</button>
            <p class="new-to-netflix" style="margin-bottom: 0px">{{ $t('or') }}</p>
            <button class="btn btn-secondary btn-transparent">{{ $t('sign-in-code') }}</button>
            <p class="mt-1 forgot-decoration">{{ $t('forgot-password') }}</p>
          </div>
          <div class="mb-1 form-check text-size">
            <input type="checkbox" class="form-check-input" id="rememberMe" />
            <label class="form-check-label" for="rememberMe">{{ $t('remember-me') }}</label>
          </div>
          <div class="terms-of-use text-size">
            <p>
              <span class="new-to-netflix"> {{ $t('new-to-netflix') }} </span>
              <span style="margin-left: 3px;" class="now-decoration"> {{ $t('now') }} </span>
            </p>
            <p class="small text-transparent protected-text">
              {{ $t('protected') }}
              <span>
                <a href="">{{ $t('more') }}</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
    <div class="footer-top"></div>
    <FooterComponent />
  </div>
</template>

<style scoped>
.btn-transparent {
  background-color: rgba(80, 80, 80, 0.5);
}

.page-brand {
  width: 112px;
  height: 70px;
}

.login-form-container {
  margin: 0 auto;
  max-width: 340px;
  height: 580px;
  padding: 32px 49px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  color: white;
}

.bg-main {
  min-height: 100vh;
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/0665f824-82de-4676-8a17-ab5b0b5d1abb/VE-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b2c6c616-3799-4ac7-92e6-c06adebb9bab_small.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.bg-main::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.auth-form-contain {
  position: relative;
  z-index: 1;
  padding-bottom: 40px;
}

header {
  height: 70px;
}

header img {
  position: relative;
  z-index: 1;
}

.input-color {
  background-color: #120e11;
  opacity: 0.7;
  color: #ffffff;
}

::placeholder {
  color: rgb(190, 190, 190);
  font-size: 12px;
}

button {
  font-size: 12px;
}

.text-size {
  font-size: 12px;
}

.new-to-netflix {
  color: #c3c3c3;
}

.header-items img {
  margin-left: 200px;
}

span a {
  text-decoration: none;
  color: rgb(8, 136, 206);
}

span a:hover {
  text-decoration: underline;
}

.forgot-decoration:hover {
  text-decoration: underline;
  cursor: pointer;
  color: rgb(160, 160, 160);
}

.now-decoration:hover {
  text-decoration: underline;
  cursor: pointer;
}

.now-decoration {
  font-weight: 620;
}

.protected-text {
  color: rgb(140, 140, 140);
}

h4 {
  font-weight: bold;
}

@media (max-width: 1366px) {
  .header-items img {
    margin-left: 0px;
  }
}

@media (max-width: 720px) {
  .bg-main {
    background-image: none;
  }
  .page-brand {
    width: 70px;
    height: 50px;
  }
  .login-form-container {
    margin: 0 auto;
    max-width: 650px;
    height: 450px;
    padding: 0px 20px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    color: white;
  }
  .footer-top {
    position: relative;
  }
  .footer-top::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1.4px solid rgb(152, 152, 152);
  }
}

</style>
