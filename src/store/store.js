import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        token: '',
        url: 'http://192.168.43.166:3001/'
    },
    plugins: [createPersistedState()],
    mutations: {
        change(state, token) {
            state.token = token
        }
    },
    getters : {
        token: state => state.token,
        url : state => state.url
    }
})
