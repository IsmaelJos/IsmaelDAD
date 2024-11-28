<template>
  <div class="contenedor">
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
  </div>
</template>

<script setup>
    import PostCard from './PostCard.vue';
</script>

<style>
    .contenedor{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
</style>
