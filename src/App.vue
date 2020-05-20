<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add">Add</button>
	</div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'App',
        computed: {
            ...mapState({
                count: 'count'
            }),
        },
        methods: {
            add() {
                this.$store.commit("add", {
                    count: 2
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
