<script setup>
import { ref } from 'vue';
import WordButton from './WordButton.vue';

const props = defineProps({
    learn: Boolean,
    known: Boolean,
    remember: Boolean,
    repeat: Boolean,
    example: Boolean,
    show: Boolean
})

const emits = defineEmits([
    "learn_clicked",
    "known_clicked",
    "remember_clicked",
    "repeat_clicked",
    "example_clicked",
    "show_clicked"
])

console.log(props)

let button_count = 0;
for (var value of [
    props.learn,
    props.known,
    props.remember,
    props.repeat,
    props.example,
    props.show
]) {
    if (value) button_count++;
}
if (button_count > 4) {
    button_count = 4
    console.error("To many buttons[button_count must be <= 4]")
}

const button_count_class_name = { 1: "uno", 2: "dos", 3: "tres", 4: "quatro" }[button_count]


</script>


<template>

    <div class="word_buttons">

        <WordButton 
        @click="$emit('known_clicked')"
        @left="$emit('known_clicked')"
         :button_count_class_name="button_count_class_name + ' lb'"
            v-if="known">I know this word <br> [←]</WordButton>

        <WordButton @left="$emit('remember_clicked')" @click="$emit('remember_clicked')" :button_count_class_name="button_count_class_name + ' lb'"
            v-if="remember">I remember<br>[←]</WordButton>

        <WordButton @down="$emit('example_clicked')" @click="$emit('example_clicked')" :button_count_class_name="button_count_class_name"
            v-if="example">Show word in context <br>[↓]</WordButton>

        <WordButton @up="$emit('show_clicked')" @click="$emit('show_clicked')" :button_count_class_name="button_count_class_name" v-if="show">Show
            translation<br> [↑]</WordButton>

        <WordButton @right="$emit('repeat_clicked')" @click="$emit('repeat_clicked')" :button_count_class_name="button_count_class_name + ' rb'"
            v-if="repeat">I don't remember<br>[→]</WordButton>

        <WordButton @right="$emit('learn_clicked')" @click="$emit('learn_clicked')" :button_count_class_name="button_count_class_name + ' rb'"
            v-if="learn">Start learning word <br>[→]</WordButton>


    </div>


</template>


<style scoped>
.word_buttons {


    display: flex;
    /* justify-content: center;
    align-items: center; */


    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

}
</style>