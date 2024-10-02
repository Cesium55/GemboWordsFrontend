<script setup>

const emit = defineEmits(['submit'])


</script>



<template>
    <button class="submitButton" @click="(e) => emit('submit', e)">
        <slot>Sumbit</slot>
    </button>
</template>

<style lang="css" scoped>

.submitButton {
    color: white;
    background-color: #27a82e;
    padding: 10px 15px;
    font-size: 20px;
    border: none;
    border-radius: 30px;
}

</style>