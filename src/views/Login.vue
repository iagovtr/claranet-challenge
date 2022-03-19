<template>
  <div class="login">
    <div class="login__container">
      <div class="login__wrapper">
        <img src="../assets/icons/logo.png" class="login__logo">
        <div class="login__input-container" v-if="showForm == statusEnum.login">
          <div class="login__title-welcome">Bem-vindo!</div>  
          <div class="login__input-wrapper">
            <input type="text" class="login__input" placeholder="Email" v-model="email">
            <img src="../assets/icons/email.svg" alt="" class="login__icon">
          </div>
          <div class="login__input-wrapper">
            <input :type="inputType" class="login__input" placeholder="Senha" v-model="password">
            <img src="../assets/icons/password.svg" alt="" class="login__icon">
            <div class="login__show-hide-password" v-if="inputType == 'password'" @click="changeType()">SHOW</div>
            <div class="login__show-hide-password" v-if="inputType == 'text'" @click="changeType()">HIDE</div>
          </div>
          <div class="login__forgot-password-content">
            <div class="login__remember-wrapper">
              <input type="checkbox" class="login__checkbox">
              <div class="login__label">Lembrar-me</div>
            </div>
            <div class="login__forgot-password">Esqueci minha senha</div>
          </div>
          <div class="login__buttons-content">
            <div class="login__login-button" @click="login()">Entrar</div>
            <div class="login__google-button-wrapper">
              <div class="login__login-button login__login-button--google" @mouseover="showIcon = false" 
                @mouseleave="showIcon = true">
                <div class="login__background-google" v-if="showIcon"  @mouseover="showIcon = false" @mouseleave="showIcon = true">
                  <img src="../assets/icons/google.svg" class="login__icon-google">
                </div>
                Logar com o Google
              </div>
            </div>
            <div class="login__title-register">Ainda não tem uma conta? 
              <b class="login__title-register login__title-register--span" @click="openRegister()">Cadastre-se</b>
            </div>
          </div>
        </div>
        <div class="login__input-container" v-if="showForm == statusEnum.register">
          <div class="login__title-welcome">Crie uma conta</div>  
          <div class="login__input-wrapper">
            <input type="text" class="login__input" placeholder="Email" v-model="email">
            <img src="../assets/icons/email.svg" alt="" class="login__icon">
          </div>
          <div class="login__input-wrapper">
            <input :type="inputType" class="login__input" placeholder="Senha" v-model="password">
            <img src="../assets/icons/password.svg" alt="" class="login__icon">
            <div class="login__show-hide-password" v-if="inputType == 'password'" @click="changeType()">SHOW</div>
            <div class="login__show-hide-password" v-if="inputType == 'text'" @click="changeType()">HIDE</div>
          </div>
          <div class="login__buttons-content">
            <div class="login__login-button" @click="signUp()">Criar</div>
          </div>
          <div class="login__title-register">Já tenho uma conta. 
            <b class="login__title-register login__title-register--span" @click="openLogin()">Entrar</b>
          </div>
        </div>
      </div>
    </div>
    <div class="login__container login__container--image">
      <div class="login__wrapper login__wrapper--image">
        <div class="login__banner-wrapper">
          <img src="../assets/icons/peoples.svg" alt="" class="login__banner">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'Login',
  data() {
    return {
      inputType: 'password',
      showIcon: true,
      showForm: 1,
      statusEnum: {
        login: 1,
        register: 2
      },
      email: '',
      password: ''
    }
  },
  methods: {
    changeType() {
      var vm = this;
      vm.inputType = vm.inputType === "password" ? "text" : "password";
    },
    openLogin() {
      var vm = this;
      vm.email = null;
      vm.password = null;
      vm.showForm = vm.statusEnum.login;
    },
    openRegister() {
      var vm = this;
      vm.email = null;
      vm.password = null;
      vm.showForm = vm.statusEnum.register;
    },
    login() {
      var vm = this;
      firebase.auth().signInWithEmailAndPassword(vm.email, vm.password).then(() => {
        vm.$router.replace('about');
      },
      (err) => {
        alert('Não foi possível realizar o login. '+err.message);
      });
    },
    signUp() {
      var vm = this;
      firebase.auth().createUserWithEmailAndPassword(vm.email, vm.password).then(() => {
        vm.$router.replace("/about");
      },
      (err) => {
        alert('Aconteceu algo inesperado. '+err.message);
      });
    }
  }
}
</script>
