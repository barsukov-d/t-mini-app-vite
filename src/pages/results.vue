<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageResultsTitle') }}
	</h4>
</template>
