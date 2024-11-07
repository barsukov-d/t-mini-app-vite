<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageAirdropTitle') }}
	</h4>

	<q-btn
		color="white"
		:label="t('buttonConnectWallet')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-10 text-black normal-case"
	/>
</template>
