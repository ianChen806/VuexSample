<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add(2)">Add</button>
		<button @click="cut(-2)">Cut</button>
		<button @click="cutRoot">Cut Root</button>
		<div>length: {{length}}</div>
		<hr>
		<button @click="addRoot(2)">Add Root</button>
		<div>rootCount: {{rootCount}}</div>
		<hr>
		<button @click="addTest(3)">Add Root</button>
	</div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex"
    import {MyAdd, RootAdd} from "./MutationTypes";
    import {MyLength, MyRootCount} from "./GetterTypes";
    import {MyAddRoot, MyCut, MyCutRoot} from "./ActionTypes";
    import {MyCount} from "./StateTypes";

    const {mapState, mapMutations, mapGetters, mapActions} = createNamespacedHelpers("my");

    export default {
        name: 'App',
        computed: {
            ...mapState({
                count: MyCount
            }),
            ...mapGetters({
                length: MyLength,
                rootCount: MyRootCount
            }),
        },
        methods: {
            addRoot(payload) {
                this.$store.commit(RootAdd, payload);
            },
            ...mapMutations({
                add: MyAdd,
            }),
            ...mapActions({
                cut: MyCut,
                cutRoot: MyCutRoot,
                addTest: MyAddRoot
            }),
        }
    }
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
