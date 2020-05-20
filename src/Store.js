import Vuex, {Store} from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const myStore = {
    state: {
        myCount: 0
    },
    mutations: {
        add(state, payload) {
            state.myCount += payload;
        }
    },
    actions: {
        cut({commit, rootState}) {
            commit("add", rootState.count);
        }
    },
    getters: {
        test({rootState}) {
            return rootState.count;
        }
    }
}

const store = new Store({
    modules: {
        my: myStore
    },
    state: {
        count: 0
    },
    mutations: {
        add(state, payload) {
            state.count += payload.count;
        }
    },
    getters: {
        length(state, getters) {
            return state.count + getters.test + getters.func(0) + 100;
        },
        test(state) {
            return state.count + 5;
        },
        func() {
            return (value) => value + 50;
        }
    },
    actions: {
        cut({commit}, payload) {
            commit("add", {count: payload.count});
        }
    }
});

export default store;
