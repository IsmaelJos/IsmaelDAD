<template>
  <section class="flex flex-col justify-center items-center">
    <button v-if="gameStatus == GameStatus.Playing" @click="checkGuess">Check Guess</button>
    <button v-else class="cursor-not-allowed">Check Guess</button>
    <div v-if="feedback" class="feedback" :style="{ color: feedbackColor }">{{ feedback }}</div>

  </section>
</template>

<script setup lang="ts">
import { GameStatus } from '@/modules/dictionary-test/interfaces';

interface Props{
  checkGuess: () => void;
  feedback: string | null;
  feedbackColor: string;
  gameStatus: GameStatus;
}
defineProps<Props>();


</script>

<style scoped>
.feedback {
  font-size: 18px;
  margin-top: 20px;
}
button {

  font-size: 1.2rem;
  font-weight: bold;
}

</style>
