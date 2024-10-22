<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

// import WebApp from '@twa-dev/sdk'
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const tab = ref('mails')

const router = useRouter()

function navigateToLeaderboard() {
	router.push('/leaderboard')
}
</script>

<template>
	<header>header !</header>
	<main class="flex-shrink-0 flex-grow">
		<RouterView></RouterView>
	</main>
	<footer>
		<button @click="navigateToLeaderboard">Перейти в лидерборд</button>
		<q-tabs v-model="tab" class="text-teal">
			<q-tab name="mails" icon="mail" label="Mails" />
			<q-tab name="alarms" icon="alarm" label="Alarms" />
			<q-tab name="movies" icon="movie" label="Movies" />
		</q-tabs>
	</footer>
</template>
