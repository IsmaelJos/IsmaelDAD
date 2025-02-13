import { useWordGame } from '../modules/dictionary-test/camposables/useWordGame';
<script setup lang="ts">
import { useWordGame } from '../modules/dictionary-test/camposables/useWordGame';

  const {isLoading} = useWordGame();
</script>

<template>

  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando el Test</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    
  </section>

</template>

<style scoped></style>
