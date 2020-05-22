<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add">Add</button>
		<button @click="cut">Cut</button>
		<div>{{length}}</div>
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
        },
        methods: {
            add() {
                this.$store.commit("my/add", 2);
            },
            cut() {
                this.$store.dispatch("my/cut", {
                    count: -2
                });
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
