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
    import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

    export default {
        name: 'App',
        computed: {
            ...mapState({
                count: state => state.my.count
            }),
            ...mapGetters("my", {
                length: "length",
                rootCount: "rootCount"
            }),
        },
        methods: {
            ...mapMutations("my", {
                add: "add",
            }),
            ...mapMutations({
                addRoot: "add",
            }),
            ...mapActions("my", {
                cut: "cut",
                cutRoot: "cutRoot",
                addTest: "addRoot"
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
