// src/router/index.ts

import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../pages/home.vue'
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/leaderboard',
		name: 'leaderboard',
		component: () => import('../pages/leaderboard.vue'),
	},

	{
		path: '/friends',
		name: 'friends',
		component: () => import('../pages/friends.vue'),
	},

	{
		path: '/results',
		name: 'results',
		component: () => import('../pages/results.vue'),
	},

	{
		path: '/airdrop',
		name: 'airdrop',
		component: () => import('../pages/airdrop.vue'),
	},

	{
		path: '/iq-test',
		name: 'iq-test',
		component: () => import('../pages/iq-test.vue'),
	},

	{
		path: '/:pathMatch(.*)*',
		redirect: { name: 'Home' },
	},
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
