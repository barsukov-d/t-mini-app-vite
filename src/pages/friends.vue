<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { initUtils } from '@telegram-apps/sdk'
import WebApp from '@twa-dev/sdk'
import { ref } from 'vue'

const { t } = useI18n()

const INVITE_URL = 'https://t.me/Iq_cr_money_bot'

const handleInviteFriend = () => {
	const utils = initUtils()
	const inviteLink = `${INVITE_URL}?startapp=${WebApp.initDataUnsafe.user?.id.toString() || ''}`
	const shareText = `Join me on this awesome Telegram mini app!`
	const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(
		inviteLink
	)}&text=${encodeURIComponent(shareText)}`
	console.log('inviteLink', inviteLink)

	utils.openTelegramLink(fullUrl)
	WebApp.openTelegramLink(fullUrl)
}

const handleCopyLink = () => {
	const inviteLink = `${INVITE_URL}?startapp=${WebApp.initDataUnsafe.user?.id.toString() || ''}`
	navigator.clipboard.writeText(inviteLink)
	alert('Invite link copied to clipboard!')
}

// Тостер
const showToast = ref(false)

const closeToast = () => {
	showToast.value = false
}

const inviteFriend = () => {
	// Логика приглашения друга
	handleInviteFriend()
	closeToast()
}

const copyLink = () => {
	// Логика копирования ссылки
	handleCopyLink()
	closeToast()
}
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageFriendsTitle') }}
	</h4>

	<img src="img_brain.png" alt="" class="w-4/5 mx-auto" />

	<h5 class="text-center text-h5">
		{{ t('pageFriendsInviteTitle') }}
	</h5>

	<q-btn
		@click="showToast = true"
		color="white"
		:label="t('buttonInviteFriends')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-20 text-black normal-case"
	/>

	<!-- Тостер -->
	<transition name="fade">
		<div v-if="showToast" class="fixed z-40 inset-0 flex items-end" @click.self="closeToast">
			<!-- Полупрозрачный затемненный фон -->
			<div @click="closeToast" class="absolute inset-0 bg-opacity-50 bg-gray-950"></div>
		</div>
	</transition>
	<transition name="slide-up">
		<div v-if="showToast" class="fixed z-50 inset-0 flex items-end" @click.self="closeToast">
			<!-- Контент тоста -->
			<div class="relative w-full bg-black rounded-t-2xl p-4">
				<h5 class="text-center text-lg font-bold mb-4">
					{{ t('toastInviteFriendTitle') }}
				</h5>
				<div class="flex flex-col">
					<q-btn
						@click="inviteFriend"
						color="white"
						:label="t('buttonInviteFriend')"
						class="rounded-lg font-bold p-4 mt-2 text-lg text-black normal-case"
					/>

					<q-btn
						@click="copyLink"
						color="white"
						:label="t('buttonCopyLink')"
						class="rounded-lg font-bold p-4 mt-2 text-lg text-black normal-case"
					/>
				</div>
			</div>
		</div>
	</transition>
</template>

<style scoped>
/* Анимация появления тоста снизу */
.slide-up-enter-active {
	transition: transform 0.5s ease-out;
}
.slide-up-leave-active {
	transition: transform 0.5s ease-in;
}
.slide-up-enter-from {
	transform: translateY(100%);
}
.slide-up-enter-to {
	transform: translateY(0%);
}
.slide-up-leave-from {
	transform: translateY(0%);
}
.slide-up-leave-to {
	transform: translateY(100%);
}

/* Анимация появления тоста снизу */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
	opacity: 0.9;
}
</style>
