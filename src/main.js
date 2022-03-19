import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from "firebase";

var config = {
  apiKey: "AIzaSyA_-zDsjoTf6NS7BF4p7V8mBoM7qqlN1-0",
  authDomain: "claranet-challenge.firebaseapp.com",
  projectId: "claranet-challenge",
  storageBucket: "claranet-challenge.appspot.com",
  messagingSenderId: "88731858174",
  appId: "1:88731858174:web:78b08515d7dd4b3cec21af"
};

firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
