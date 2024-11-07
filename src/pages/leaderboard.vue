<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

interface Leader {
	id: number
	name: string
	score: number
	rank: number
	avatar: string
}

const leaders: Leader[] = [
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	{
		id: 1,
		name: 'John Doe',
		score: 150,
		rank: 1,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
	// Add more mock data as needed

	{
		id: 2,
		name: 'Jane Doe',
		score: 100,
		rank: 2,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 3,
		name: 'John Smith',
		score: 50,
		rank: 3,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},

	{
		id: 4,
		name: 'Jane Smith',
		score: 25,
		rank: 4,
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
	},
]

const user: Leader = {
	id: 1,
	name: 'John Doe',
	score: 150,
	rank: 233,
	avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
}
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageLeaderboardTitle') }}
	</h4>

	<q-item class="px-0 mt-10">
		<q-item-section avatar>
			<q-avatar size="48px">
				<img :src="user.avatar" />
			</q-avatar>
		</q-item-section>

		<q-item-section>
			<q-item-label class="text-weight-bold text-white">{{ user.name }}</q-item-label>
		</q-item-section>

		<q-item-section side>
			<q-item-label class="text-h6 text-white">{{ user.score }}</q-item-label>
			<q-item-label class="text-white" caption>IQs</q-item-label>
		</q-item-section>

		<q-item-section avatar class="!items-center">
			<div class="rank-badge">{{ user.rank }}</div>
		</q-item-section>
	</q-item>

	<h6 class="text-h6 text-white text-left mt-10">Top 200</h6>

	<div class="q-mt-md mt-10">
		<q-list separator>
			<q-item v-for="leader in leaders" :key="leader.id" class="px-0">
				<q-item-section avatar>
					<q-avatar size="48px">
						<img :src="leader.avatar" />
					</q-avatar>
				</q-item-section>

				<q-item-section>
					<q-item-label class="text-weight-bold text-white">{{
						leader.name
					}}</q-item-label>
				</q-item-section>

				<q-item-section side>
					<q-item-label class="text-h6 text-white">{{ leader.score }}</q-item-label>
					<q-item-label class="text-white" caption>IQs</q-item-label>
				</q-item-section>

				<q-item-section avatar class="!items-center">
					<div class="rank-badge">{{ leader.rank }}</div>
				</q-item-section>
			</q-item>
		</q-list>
	</div>
</template>
