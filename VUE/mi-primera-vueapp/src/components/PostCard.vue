<template>
    <div class="post-card">
        <h3>Tarjeta</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero culpa nesciunt unde aliquid repellendus ipsum harum modi eveniet, cum alias dicta eligendi repudiandae deserunt sequi labore tenetur voluptate ex earum?</p>
        <PostButton/>
    </div>
</template>

<script setup>
    import PostButton from './PostButton.vue';
</script>

<style scoped>
    .post-card{
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: 2px solid #ccc;
    }
</style>
