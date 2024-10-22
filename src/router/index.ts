// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
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
	history: createWebHistory(),
	routes,
})

export default router
