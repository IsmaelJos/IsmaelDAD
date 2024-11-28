<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterCompotition',
        setup(){
            let counter = ref(0)
            const addCounter = () => {
                counter.value++
            }
            return (counter, addCounter)
        }
    })
</script>

<style>

</style>
