// src/router/index.ts

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import LeaderBoard from '../pages/leaderboard.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/leaderboard',
		name: 'LiderBoard',
		component: LeaderBoard,
	},
	// Добавьте дополнительные маршруты здесь
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
