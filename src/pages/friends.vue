<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
		color="white"
		:label="t('buttonInviteFriends')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-20 text-black normal-case"
	/>
</template>
