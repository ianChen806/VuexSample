import Vuex, {Store} from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Store({
    state: {
        count: 0
    },
});

export default store;
