<script setup>

const emit = defineEmits(['submit'])


</script>



<template>
    <button class="submitButton" @click="(e) => emit('submit', e)">
        <slot>Sumbit</slot>
    </button>
</template>

<style lang="css" scoped>


</style>