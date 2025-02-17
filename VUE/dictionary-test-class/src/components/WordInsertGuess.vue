<template>
  <section class="flex flex-col justify-center items-center">
    <button @click="checkGuess">Check Guess</button>

    <div v-if="feedback" class="feedback" :style="{ color: feedbackColor }">{{ feedback }}</div>

  </section>
</template>

<script setup lang="ts">
interface Props{
  checkGuess: () => void;
  feedback: string | null;
  feedbackColor: string;
}
defineProps<Props>();

defineEmits<{

}>();

</script>

<style scoped>
.feedback {
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
