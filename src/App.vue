<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

import WebApp from '@twa-dev/sdk'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const tab = ref('mails')

const router = useRouter()

const navigateTo = (page: string) => {
	router.push({ name: page })
}
</script>

<template>
	<main class="flex-shrink-0 flex-grow">
		<pre>{{ WebApp.initDataUnsafe.user }}</pre>
		<pre>{{ WebApp.initData }}</pre>
		<RouterView></RouterView>
	</main>
	<footer>
		<q-tabs v-model="tab" class="text-teal">
			<q-tab @click="navigateTo('home')" name="home" icon="home" label="Home" class="w-1/3"
				><q-badge color="red" text-color="white" floating>10+</q-badge></q-tab
			>

			<q-tab
				@click="navigateTo('leaderboard')"
				name="leaderboard"
				icon="bar_chart"
				label="Leaderboard"
				class="w-1/3"
			/>
			<q-tab
				@click="navigateTo('friends')"
				name="friends"
				icon="group"
				label="Friends"
				class="w-1/3"
			/>
		</q-tabs>
	</footer>
</template>

<style>
.q-tab__label {
	font-size: 12px;
}
</style>
