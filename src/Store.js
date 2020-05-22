import Vuex, {Store} from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const myStore = {
    namespaced: true,
    state: {
        count: 0,
        name:"Test",
    },
    mutations: {
        add(state, payload) {
            state.count += payload;
        }
    },
    actions: {
        cut(context, payload) {
            context.commit("add", payload.count);
        }
    },
    getters: {
        length(state) {
            return state.name.length;
        }
    }
}

const store = new Store({
    modules: {
        my: myStore
    },
});

export default store;
