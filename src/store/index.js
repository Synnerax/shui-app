import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './../router'
//import CryptoJS from 'crypto-js';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    displaySettings: false
  },
  mutations: {
    toggleDisplaySettings(state) {
      state.displaySettings = !state.displaySettings
    }
    
  },
  actions: {
    async register(ctx, cred) {

      let resp = await axios.post(`/register`, {
        username: cred.username,
        password: cred.password
      });

      console.log("resp:",resp)

      // Route to /passwords
      //router.push('/login')

    },
    async login(ctx, cred) {

      let resp = await axios.post(`/login`, {
        username: cred.username,
        password: cred.password
      });

      // Session Storage
      sessionStorage.setItem('userToken', resp.data.token);
      sessionStorage.setItem('userkey', resp.data.userkey);

      // Route to /passwords
      router.push('/flow')
    
  }
},
  modules: {
  }
})
