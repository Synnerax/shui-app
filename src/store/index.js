import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
//import router from './../router'
//import CryptoJS from 'crypto-js';

Vue.use(Vuex)

const API = 'http://localhost:3000';

export default new Vuex.Store({
  state: {
  },
  mutations: { 
  },
  actions: {
    async register(ctx, cred) {

      let resp = await axios.post(`${API}/register`, {
        username: cred.username,
        password: cred.password
      });

      console.log("resp:",resp)

      // Route to /passwords
      //router.push('/login')

    }
  },
  modules: {
  }
})
