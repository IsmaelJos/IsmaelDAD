
<template>
    <section class="mt-[10px] flex flex-col justify-center items-center">
      <h2>Definitions:</h2>
    <ul class="w-[600px]">
      <li class="mb-[20px]" v-for="(definition, index) in definitions.slice(0, failCount+1)" :key="index">
        {{ definition }}
      </li>
    </ul>
    </section>
</template>

<script setup lang="ts">

interface Props{
    definitions: string[];
    failCount: number
}

defineProps<Props>();

</script>

<style scoped>

</style>

