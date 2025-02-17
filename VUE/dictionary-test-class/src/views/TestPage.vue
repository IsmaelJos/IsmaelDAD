<script setup lang="ts">
import { useWordGame } from '../modules/dictionary-test/camposables/useWordGame';

  const {isLoading, wordApi, definitions, userGuess, checkGuess, feedback, feedbackColor,wordDisplay} = useWordGame();
</script>

<template>

  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Please Wait</h1>
    <h3 class="animate-pulse">Loading the Test</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center">
    <h1 class="m-5">Which word is this?</h1>
    <h2 class="bold">{{wordApi}}</h2>

    <div class="word-container">{{ wordDisplay }}</div>

  <input type="text" v-model="userGuess" :maxlength="wordApi.length" class="guess-input" placeholder="Enter your guess"/>

  <button @click="checkGuess">Check Guess</button>

  <div v-if="feedback" class="feedback" :style="{ color: feedbackColor }">{{ feedback }}</div>

    <h2>Definitions:</h2>
    <ul class="w-[600px]">
      <li class="mb-[20px]" v-for="(definition, index) in definitions" :key="index">
        {{ definitions[index] }}
      </li>
    </ul>

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
.feedback {
  font-size: 18px;
  margin-top: 20px;
}
</style>
