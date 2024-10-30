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
.word_button {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;


    background-color: inherit;
    color: white;
    box-shadow: none;
    border: none;
    border-top: 1px #27a82e solid;
    border-left: 1px #27a82e solid;
    /* border-right: 1px #27a82e solid; */


    flex-grow: 1;


    font-size: 16px;
}

.uno{
    width: 100%;
}
.dos{
    width: 50%;
}
.tres{
    width: 33.3%;
}
.quatro{
    width: 25%;
}

.lb{
    border-bottom-left-radius: inherit;
    border-left: none;
}
.rb{
    border-bottom-right-radius: inherit;
    border-right: none;
}


.word_button:hover {
    background-color: rgb(25, 26, 31);
}
</style>