<script setup lang="ts">
import { useWordGame } from '../modules/dictionary-test/camposables/useWordGame';

  const {isLoading, wordApi, definitions} = useWordGame();
</script>

<template>

  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Please Wait</h1>
    <h3 class="animate-pulse">Loading the Test</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center">
    <h1 class="m-5">Which word is this?</h1>
    <p><strong>Word:</strong> {{ wordApi }}</p>
      <h2>Definitions:</h2>
      <ul class="w-[600px]">
        <li class="mb-[20px]" v-for="(definition, index) in definitions" :key="index">
          {{ definitions[index] }}
        </li>
      </ul>

  </section>

</template>

<style scoped></style>
