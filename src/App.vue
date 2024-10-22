<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import WebApp from '@twa-dev/sdk'
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />

	<div class="q-pa-md q-gutter-md">
		<q-btn color="teal" size="sm" label="Unread Mails">
			<q-badge color="orange" floating transparent> ∞ </q-badge>
		</q-btn>

		<q-btn dense round flat icon="email">
			<q-badge color="red" floating transparent> 4 </q-badge>
		</q-btn>

		<div class="text-h4">
			Title
			<q-badge transparent align="middle" color="orange"> app v3.0.0 </q-badge>
		</div>
	</div>

	<button @click="() => WebApp.showAlert(`Hello World!`)">Show Alert</button>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
