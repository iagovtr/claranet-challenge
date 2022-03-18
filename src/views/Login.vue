<template>
  <div class="login">
    <div class="login__container">
      <div class="login__wrapper">
        <div class="login__logo-wrapper">
          <img src="../assets/icons/logo.png" class="login__logo">
        </div>
        <div class="login__title-welcome">Bem-vindo!</div>
        <div class="login__input-container">
          <div class="login__input-wrapper">
            <input type="text" class="login__input" placeholder="Email">
            <img src="../assets/icons/email.svg" alt="" class="login__icon">
          </div>
          <div class="login__input-wrapper">
            <input :type="inputType" class="login__input" placeholder="Senha">
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
            <div class="login__login-button">Entrar</div>
            <div class="login__google-button-wrapper">
              <div class="login__login-button login__login-button--google" @mouseover="showIcon = false" 
                @mouseleave="showIcon = true">
                <div class="login__background-google" v-if="showIcon">
                  <img src="../assets/icons/google.svg" class="login__icon-google">
                </div>
                Logar com o Google
              </div>
            </div>
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

export default {
  name: 'Login',
  data() {
    return {
      inputType: 'password',
      showIcon: true,
    }
  },
  methods: {
    changeType() {
      var vm = this;
      vm.inputType = vm.inputType === "password" ? "text" : "password";
    }
  }
}
</script>
