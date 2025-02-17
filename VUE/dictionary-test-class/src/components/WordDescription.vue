
<template>
    <section class="mt-[40px] flex flex-col justify-center items-center">
      <h2>Definitions:</h2>
    <ul class="w-[600px]">
      <li class="mb-[20px]" v-for="(definition, index) in definitions" :key="index">
        {{ definitions[index] }}
      </li>
    </ul>
    </section>
</template>

<script setup lang="ts">

interface Props{
    definitions: string[];
}

defineProps<Props>();

</script>

<style scoped>

</style>

