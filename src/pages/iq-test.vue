<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { onMounted, onUnmounted, ref } from 'vue'
const { t } = useI18n()

interface Question {
	id: number
	image: string
	selectedOption?: number | null
}

const questions = ref<Question[]>([
	{
		id: 1,
		image: '/images/question1.png',
	},
	{
		id: 2,
		image: '/images/question2.png',
	},
	{
		id: 3,
		image: '/images/question3.png',
	},
	{
		id: 4,
		image: '/images/question4.png',
	},
	{
		id: 5,
		image: '/images/question5.png',
	},
	{
		id: 6,
		image: '/images/question6.png',
	},
	{
		id: 7,
		image: '/images/question7.png',
	},
	{
		id: 8,
		image: '/images/question8.png',
	},
	{
		id: 9,
		image: '/images/question9.png',
	},
	{
		id: 10,
		image: '/images/question10.png',
	},
	{
		id: 11,
		image: '/images/question11.png',
	},
	{
		id: 12,
		image: '/images/question12.png',
	},
	{
		id: 13,
		image: '/images/question13.png',
	},
	{
		id: 14,
		image: '/images/question14.png',
	},
	{
		id: 15,
		image: '/images/question15.png',
	},
	{
		id: 16,
		image: '/images/question16.png',
	},
	{
		id: 17,
		image: '/images/question17.png',
	},
	{
		id: 18,
		image: '/images/question18.png',
	},
	{
		id: 19,
		image: '/images/question19.png',
	},
	{
		id: 20,
		image: '/images/question20.png',
	},
])

const questionsOptions = ref<string[]>([
	'Answer A',
	'Answer B',
	'Answer C',
	'Answer D',
	'Answer E',
	'Answer F',
])

const currentQuestionIndex = ref(0)
const selectedOption = ref<number | null>(null)

const goToQuestion = (index: number) => {
	currentQuestionIndex.value = index
	selectedOption.value = questions.value[index].selectedOption ?? null
}

const selectOption = (optionIndex: number) => {
	selectedOption.value = optionIndex
}

const submitAnswer = () => {
	if (selectedOption.value !== null) {
		questions.value[currentQuestionIndex.value].selectedOption = selectedOption.value
		// Переход к следующему вопросу или завершение теста
		if (currentQuestionIndex.value < questions.value.length - 1) {
			goToQuestion(currentQuestionIndex.value + 1)
		} else {
			console.log('Тест завершен')
		}
	}
}

const timeLeft = ref(1 * 60) // 20 минут в секундах
let timer: ReturnType<typeof setInterval>

const formatTime = (seconds: number) => {
	const min = Math.floor(seconds / 60)
	const sec = seconds % 60
	return `${min}:${sec < 10 ? '0' : ''}${sec}`
}

const submitTest = () => {
	// Здесь добавьте логику отправки теста на сервер
	console.log('Тест завершен и отправлен на сервер')
}

onMounted(() => {
	timer = setInterval(() => {
		timeLeft.value--
		if (timeLeft.value <= 0) {
			clearInterval(timer)
			submitTest()
		}
	}, 1000)
})

onUnmounted(() => {
	clearInterval(timer)
})
</script>

<template>
	<h4 class="text-h4 font-bold">
		{{ t('pageIqTestTitle') }}
	</h4>

	<!-- Таймер -->
	<div class="timer">{{ t('testTime') }}: {{ formatTime(timeLeft) }}</div>

	<!-- Блок навигации по вопросам -->
	<div class="flex overflow-x-auto gap-2 py-4">
		<q-btn
			v-for="(question, index) in questions"
			class="w-8 h-8"
			:key="question.id"
			:label="question.id"
			:color="
				currentQuestionIndex === index
					? 'primary'
					: question.selectedOption !== undefined && question.selectedOption !== null
					? 'green'
					: 'grey'
			"
			@click="goToQuestion(index)"
		/>
	</div>

	<!-- Номер вопроса -->
	<h4 class="mt-4">{{ t('pageIqTestQuestion') }} {{ questions[currentQuestionIndex].id }}</h4>

	<!-- Картинка -->
	<q-img :src="questions[currentQuestionIndex].image" class="my-4" style="max-height: 200px" />

	<!-- Варианты ответов -->
	<div class="grid grid-cols-2 gap-4 my-4">
		<q-btn
			v-for="(option, index) in questionsOptions"
			:key="index"
			:label="option"
			:color="selectedOption === index ? 'primary' : 'grey'"
			@click="selectOption(index)"
			unelevated
		/>
	</div>

	<!-- Кнопка "Ответить" -->
	<q-btn
		color="primary"
		:label="t('buttonSubmitAnswer')"
		:disabled="selectedOption === null"
		@click="submitAnswer"
	/>
</template>
