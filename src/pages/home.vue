<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const iqScore = ref<number>(100)
</script>

<template>
	<h4 class="text-h4 font-bold max-w-80 mx-auto text-center">
		{{ t('pageHomeTitle') }}
	</h4>

	<img src="img_brain.png" alt="" class="w-1/2 mx-auto" />

	<h5 class="text-center text-h5">
		{{ t('pageHomeTitleScore') }}
	</h5>

	<div class="flex justify-center items-center mt-4">
		<span class="text-2xl px-2 py-1 border-4 border-zinc-300 rounded-2xl">{{ iqScore }}</span>
	</div>

	<div class="flex items-center justify-between mt-5">
		<div class="w-1/3">
			<span class="text-lg">
				{{ t('pageHomeTitleScoreRewards') }}
			</span>
			<div class="flex items-center justify-center">
				<span>+100</span>
				<img src="img_brain.png" alt="" class="w-6 h-6" />
			</div>
		</div>
		<div class="w-1/3">
			<span class="text-lg">
				{{ t('pageHomeTitleScoreTasks') }}
			</span>
			<div class="flex items-center justify-center">
				<span>+100</span>
				<img src="img_brain.png" alt="" class="w-6 h-6" />
			</div>
		</div>
		<div class="w-1/3">
			<span class="text-lg">
				{{ t('pageHomeTitleScoreInvites') }}
			</span>
			<div class="flex items-center justify-center">
				<span>+100</span>
				<img src="img_brain.png" alt="" class="w-6 h-6" />
			</div>
		</div>
	</div>

	<q-btn
		to="/iq-test"
		color="white"
		:label="t('buttonTakeIQTest')"
		class="w-full text-2xl rounded-2xl font-bold p-4 mt-10 text-black normal-case"
	/>

	<h5 class="text-h5 text-left mt-10">
		{{ t('pageHomeTitleTasks') }}
	</h5>

	<div>
		<div v-for="item in 10" class="border-4 h-28 border-zinc-600 mt-4 rounded-2xl 0">
			<span>Title{{ item }}</span>
		</div>
	</div>
</template>
