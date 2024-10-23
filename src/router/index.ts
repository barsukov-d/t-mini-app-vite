// src/router/index.ts

import { createRouter, createMemoryHistory } from 'vue-router'
import Home from '../pages/home.vue'
import LeaderBoard from '../pages/leaderboard.vue'
import Friends from '../pages/friends.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/leaderboard',
		name: 'leaderboard',
		component: LeaderBoard,
	},

	{
		path: '/friends',
		name: 'friends',
		component: Friends,
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
