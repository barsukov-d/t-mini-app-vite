<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'

import WebApp from '@twa-dev/sdk'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'

const tab = ref('mails')

const router = useRouter()

const navigateTo = (page: string) => {
	router.push({ name: page })
}

const footerMenu = [
	{
		name: 'home',
		icon: 'home',
		label: 'Home',
	},
	{
		name: 'results',
		icon: 'today',
		label: 'Results',
	},

	{
		name: 'friends',
		icon: 'group',
		label: 'Friends',
	},
	{
		name: 'leaderboard',
		icon: 'bar_chart',
		label: 'Leaders',
	},
	{
		name: 'airdrop',
		icon: 'money',
		label: 'Airdrop',
	},
]

const { t, locale } = useI18n({ useScope: 'global' })

console.log('WebApp.initDataUnsafe.user?.language_code', WebApp.initDataUnsafe.user?.language_code)

const langCode = ref(WebApp.initDataUnsafe.user?.language_code || 'en')

onMounted(() => {
	locale.value = langCode.value
})
</script>

<template>
	<main class="flex-shrink-0 flex-grow py-5 px-4">
		<!-- <pre>user?.id - {{ WebApp.initDataUnsafe.user?.id }}</pre>
		<pre>start_param - {{ WebApp.initDataUnsafe.start_param }}</pre>
		<pre>{{ WebApp.initData }}</pre> -->
		<!-- <pre>{{ langCode }}</pre> -->
		<RouterView></RouterView>
	</main>
	<footer class="sticky bottom-0 z-20 bg-[#242424]">
		<q-tabs v-model="tab" class="text-zinc-400" active-color="white">
			<q-tab
				v-for="item in footerMenu"
				:key="item.name"
				class="px-2 w-1/5"
				:label="item.label"
				:icon="item.icon"
				@click="navigateTo(item.name)"
			/>
		</q-tabs>
	</footer>
</template>

<style>
.q-tab__label {
	font-size: 10px;
}
</style>
