import Vuex, {Store} from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const myStore = {
    namespaced: true,
    state: {
        count: 0,
        name: "Test",
    },
    mutations: {
        add(state, payload) {
            state.count += payload;
        }
    },
    actions: {
        cut(context, payload) {
            context.commit("add", payload.count);
        },
        cutRoot(context) {
            context.commit("add", -context.rootState.rootCount);
        },
        addRoot(context) {
            context.commit("add", 3, {root: true});
        }
    },
    getters: {
        length(state) {
            return state.name.length;
        },
        rootCount(state, getters, rootState) {
            return rootState.rootCount;
        },
    }
}

const store = new Store({
    modules: {
        my: myStore
    },
    state: {
        rootCount: 0
    },
    mutations: {
        add(state, payload) {
            state.rootCount += payload;
        }
    },
});

export default store;
