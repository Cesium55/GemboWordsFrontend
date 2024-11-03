<script setup>
import { ref } from 'vue';
const props = defineProps({
    button_count_class_name: String
})

const emits = defineEmits(["click", "up", "down", "left", "right"])



</script>


<template>

    <button :class="'word_button ' + button_count_class_name"  @click="$emit('click')"> 
        <slot>¡WORD BUTTON!</slot>
    </button>

</template>


<style scoped>

</style>