// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages: {
		en: {
			// Common
			buttonTakeIQTest: 'Take IQ Test',
			buttonInviteFriends: 'Invite Friends',
			buttonInviteFriend: 'Invite Friend',
			buttonCopyLink: 'Copy Link',

			// Home Page
			pageHomeTitle: 'Find out your IQ and get Crypto',
			pageHomeTitleScore: 'Your Total IQ Score',
			pageHomeTitleScoreRewards: 'Rewards',
			pageHomeTitleScoreTasks: 'Tasks',
			pageHomeTitleScoreInvites: 'Invites',
			pageHomeTitleTasks: 'Tasks',

			// Friends Page
			pageFriendsTitle: 'Invite your friends and get more IQs',
			pageFriendsInviteTitle: 'Invite your friends and get more IQs',

			// Toasts
			toastInviteFriendTitle: 'Invite your friends to get more IQs',
		},
		ru: {
			// Common
			buttonTakeIQTest: 'Пройти тест на IQ',
			buttonInviteFriends: 'Пригласить друзей',
			buttonInviteFriend: 'Пригласить друга',
			buttonCopyLink: 'Скопировать ссылку',

			// Home Page
			pageHomeTitle: 'Узнай свой IQ и получи крипту',
			pageHomeTitleScore: 'Ваш общий балл IQ',
			pageHomeTitleScoreRewards: 'Награды',
			pageHomeTitleScoreTasks: 'Задания',
			pageHomeTitleScoreInvites: 'Приглашения',
			pageHomeTitleTasks: 'Задания',

			// Friends Page
			pageFriendsTitle: 'Пригласите своих друзей и получите больше IQ',
			pageFriendsInviteTitle: 'Пригласите своих друзей и получите больше IQ',

			// Toasts
			toastInviteFriendTitle: 'Пригласите своих друзей и получите больше IQ',
		},
	},
})

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import Tailwind CSS
import './assets/tailwind.css'

// Import your custom css
import './style.css'

// Import TWA SDK
import WebApp from '@twa-dev/sdk'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(Quasar, {
	plugins: {}, // import Quasar plugins and add here
})

myApp.use(router)
// Assumes you have a <div id="app"></div> in your index.html

myApp.use(i18n)
myApp.mount('#app')

WebApp.ready()
