<template>
  <div class="about">
    <div class="about__title">Parabéns, você entrou!</div>
    <div class="about__button" @click="logout()">Clique aqui para voltar a tela de login</div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  methods: {
    logout() {
      var vm = this;
      firebase.auth().signOut()
      .then(
        () => {
        vm.$router.replace('login')
      })
    }
  }
}
</script>
