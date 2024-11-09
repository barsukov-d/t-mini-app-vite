<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageResultsTitle') }}
	</h4>

	<q-btn
		to="/iq-test"
		color="white"
		:label="t('buttonTakeIQTest')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-10 text-black normal-case"
	/>

	<h5 class="text-h5 text-left mt-10">
		{{ t('pageResultsTextNotHaveTest') }}
	</h5>

	<q-btn
		type="a"
		href="https://example.com/document.pdf"
		target="_blank"
		rel="noopener noreferrer"
		color="white"
		:label="t('buttonWhatIsIQTest')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-10 text-black normal-case"
	/>
</template>
