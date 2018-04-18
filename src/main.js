import Vue from 'nativescript-vue';

import router from './router';

import axios from 'axios'
import VueAxios from 'vue-axios'

import firebase from 'nativescript-plugin-firebase'

firebase.init({
  onMessageReceivedCallback: (message) => {
    if ('title' in message || 'body' in message) { //Code works only when message contains a title and a body
      console.log("Title: " + message.title);
      console.log("Body: " + message.body);
    }
  }})
  .then((instance) => {
    console.log("firebase.init done");
  }, (error) => {
    console.log("firebase init failed")
})

Vue.use(VueAxios, axios)

import './styles.scss';

// Uncommment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,


}).$start();