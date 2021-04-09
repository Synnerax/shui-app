import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './../router'
import CryptoJS from 'crypto-js';

Vue.use(Vuex)


export default new Vuex.Store({
  state() {
    return {
      displaySettings: false,
      streams: [],
      messages: []
    }
  },
  mutations: {
    toggleDisplaySettings(state) {
      if(sessionStorage.getItem('userToken')){
        state.displaySettings = !state.displaySettings
      }
    },
    fetchedStreams(state, streams) {
      state.streams = streams
    },
    showMessages(state, messages) {
      state.messages = messages
    },
   
    
  },
  actions: {
    async removeUser() {
      try{
        let resp = await axios.post('gdpr/remove-me', {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
          }
        })
        console.log(resp)
        router.push("/removed")
      } catch(err) {
        console.error(err)
      }
    },
    async register(ctx, cred) {

      try{
        let resp = await axios.post(`/register`, {
          username: cred.username,
          password: cred.password
        });
  
        console.log("resp:",resp)
  
        // Route to /passwords
        //router.push('/login')
        router.push('/sign-in')
      } catch(err) {
        console.error(err);
      }
    },
    async login(ctx, cred) {

      let resp = await axios.post(`/login`, {
        username: cred.username,
        password: cred.password
      });

      // Session Storage
      sessionStorage.setItem('userToken', resp.data.token);
      sessionStorage.setItem('userkey', resp.data.userkey);
      sessionStorage.setItem('public', resp.data.public)
      // Route to /passwords
      router.push('/flow')
    
    },
    async isLoggedIn() {
      
        if(sessionStorage.getItem('userToken')) {
          console.log("FIRE DA LISA")
          router.push('/flow')
        }
      
    },
    async publishMessage(ctx, message) {
      let resp = await axios.post('/flow/create-message', message, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
        }
      })

      console.log(resp)
      router.push('/flow')
    },
    async fetchFlow(ctx) {
      
      try {
        let resp = await axios.get('/streams', {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
          }
        })
        ctx.commit('fetchedStreams', resp.data)
        ctx.dispatch('fetchMessages')
        console.log(resp.data)
        return resp
      } catch (error) {
        console.log("the error:", error)
        router.push('/')
        sessionStorage.removeItem('userToken')
      }
    },
    async addStream(ctx, payload) {
      console.log(payload)
      try {
        let resp = await axios.post('/streams/add', {stream: payload}, {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
          }
        })
        ctx.dispatch('fetchFlow')
        console.log(resp.data)
        return resp
      } catch (error) {
        console.log("the error:", error)
        
      }
    },
    async removeStream(ctx, payload) {
      console.log(payload)
      try {
        let resp = await axios.post('/streams/remove', {stream: payload}, {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
          }
        })
        ctx.commit('fetchedStreams', resp.data)
        console.log('resp:', resp.data)
      } catch (error){
        console.error(error)
      }
    },
    async fetchMessages(ctx) {
      console.log('Fetchmessages was fired!')
      try {
        let resp = await axios.get('/flow/view', {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('userToken')}`
          }
        })
        
        let data =  [...resp.data]

        for(let i = 0; i < data.length; i++){
          console.log("its working", i)
          let decrypted = CryptoJS.AES.decrypt(data[i].text, sessionStorage.getItem('userToken')).toString(CryptoJS.enc.Utf8)
          data[i] = {...data[i], text: decrypted}
          console.log("if im really luckky, this will be the a awsome obj", data[i])
        }
        
        ctx.commit('showMessages', data)
        return resp
      } catch (error) {
        console.log("the error:", error)
        
      }
    }
},
  modules: {
  }
})
