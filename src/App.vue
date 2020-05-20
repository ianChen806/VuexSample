<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add">Add</button>
		<button @click="cut">Cut</button>
		<div>{{length}}</div>
	</div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: 'App',
        computed: {
            ...mapState({
                count: 'count'
            }),
            ...mapGetters({
                length: 'length',
                test: 'test',
                func: 'func',
            }),
        },
        methods: {
            add() {
                this.$store.commit("add", {
                    count: 2
                });
            },
            cut() {
                this.$store.dispatch("cut");
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
