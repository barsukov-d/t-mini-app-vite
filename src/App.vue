<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

// import WebApp from '@twa-dev/sdk'
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
		<RouterView></RouterView>
	</main>
	<footer>
		<q-tabs v-model="tab" class="text-teal">
			<q-tab @click="navigateTo('home')" name="home" icon="mail" label="Home" class="w-1/4" />
			<q-tab
				@click="navigateTo('leaderboard')"
				name="leaderboard"
				icon="alarm"
				label="Leaderboard"
				class="w-1/2"
			/>
			<q-tab
				@click="navigateTo('friends')"
				name="friends"
				icon="movie"
				label="Friends"
				class="w-1/4"
			/>
		</q-tabs>
	</footer>
</template>
