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
    }
});

export default store;
