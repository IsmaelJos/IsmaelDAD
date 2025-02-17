<script setup lang="ts">
import WordInsertGuess from '@/components/WordInsertGuess.vue';
import { useWordGame } from '../modules/dictionary-test/camposables/useWordGame'
import WordDescription from '@/components/WordDescription.vue';

const {
  isLoading,
  wordApi,
  definitions,
  userGuess,
  checkGuess,
  feedback,
  feedbackColor,
  wordDisplay,
} = useWordGame()

</script>

<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Please Wait</h1>
    <h3 class="animate-pulse">Loading the Test</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center">
    <h1 class="mt-[200px]">Which word is this?</h1>

    <div class="word-container">{{ wordDisplay }}</div>

    <input type="text" v-model="userGuess" :maxlength="wordApi.length" class="guess-input"
      placeholder="Enter your guess"
    />

    <WordInsertGuess
    :wordApi="wordApi"
    :wordDisplay="wordDisplay"
    :checkGuess="checkGuess"
    :feedback="feedback"
    :feedbackColor="feedbackColor"
    />
    <WordDescription
      :definitions="definitions"
    />
  </section>
</template>

<style scoped>
.word-container {
  font-size: 24px;
  font-family: Arial, sans-serif;
  margin-bottom: 20px;
}
.guess-input {
  font-size: 24px;
  padding: 5px;
  width: 200px;
  text-align: center;
}
</style>
