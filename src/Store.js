import Vuex, {Store} from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Store({
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
        cut(context) {
            context.commit("add", {
                count: -1
            });
        }
    }
});

export default store;
