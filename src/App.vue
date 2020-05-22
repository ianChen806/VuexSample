<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add">Add</button>
		<button @click="cut">Cut</button>
		<button @click="cutRoot">Cut Root</button>
		<div>{{length}}</div>
		<hr>
		<button @click="addRoot">Add Root</button>
		<div>{{rootCount}}</div>
		<hr>
		<button @click="addTest">Add Root</button>
	</div>
</template>

<script>
    export default {
        name: 'App',
        computed: {
            count() {
                return this.$store.state.my.count;
            },
            length() {
                return this.$store.getters["my/length"];
            },
            rootCount() {
                return this.$store.getters["my/rootCount"];
            }
        },
        methods: {
            add() {
                this.$store.commit("my/add", 2);
            },
            cut() {
                this.$store.dispatch("my/cut", {
                    count: -2
                });
            },
            cutRoot() {
                this.$store.dispatch("my/cutRoot");
            },
            addRoot() {
                this.$store.commit("add", 2);
            },
            addTest() {
                this.$store.dispatch("my/addRoot", 3);
            }
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
