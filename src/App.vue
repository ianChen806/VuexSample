<template>
	<div id="app">
		<div>count: {{count}}</div>
		<button @click="add(2)">Add</button>
	</div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: 'App',
        computed: {
            ...mapState({
                count: 'count'
            }),
        },
        methods: {
            ...mapMutations({
                add: 'add'
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
