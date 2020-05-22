import Vuex, {Store} from "vuex";
import Vue from "vue";
import {MyAdd, RootAdd} from "./MutationTypes";
import {MyAddRoot, MyCut, MyCutRoot} from "./ActionTypes";
import {MyCount, MyName, RootCount} from "./StateTypes";
import {MyLength, MyRootCount} from "./GetterTypes";

Vue.use(Vuex);

const myStore = {
    namespaced: true,
    state: {
        [MyCount]: 0,
        [MyName]: "Test",
    },
    mutations: {
        [MyAdd](state, payload) {
            state.count += payload;
        }
    },
    actions: {
        [MyCut](context, payload) {
            context.commit("add", payload);
        },
        [MyCutRoot](context) {
            context.commit("add", -context.rootState.rootCount);
        },
        [MyAddRoot](context) {
            context.commit("add", 3, {root: true});
        }
    },
    getters: {
        [MyLength](state) {
            return state.name.length;
        },
        [MyRootCount](state, getters, rootState) {
            return rootState.rootCount;
        },
    }
}

const store = new Store({
    modules: {
        my: myStore
    },
    state: {
        [RootCount]: 0
    },
    mutations: {
        [RootAdd](state, payload) {
            state.rootCount += payload;
        }
    },
});

export default store;
