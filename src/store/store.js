import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        token: ''
    },
    mutations: {
        change(state, flavor) {
            state.token = token
        }
    },
    getters : {
        token: state => state.token
    }
})