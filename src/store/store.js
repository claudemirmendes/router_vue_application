import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        token: '',
        url: 'https://dermato-agenda.herokuapp.com/'
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
