<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

import WebApp from '@twa-dev/sdk'
import { ref } from 'vue'

const tab = ref('mails')
</script>

<template>
	<header>header</header>
	<main class="flex-shrink-0 flex-grow">
		<router-view></router-view>
	</main>
	<footer>
		<q-tabs v-model="tab" class="text-teal">
			<q-tab name="mails" icon="mail" label="Mails" />
			<q-tab name="alarms" icon="alarm" label="Alarms" />
			<q-tab name="movies" icon="movie" label="Movies" />
		</q-tabs>
	</footer>
</template>
