<script setup>
import HomeCont from '@/components/HomeCont.vue';
import WordPanel from '@/components/WordPanel.vue';
import { ref } from 'vue';
import { get_words } from '@/utils/fake_data';


let words = get_words()

let index = 0
const word = ref(words[index])
function next_word() {
    index++

    if (index < words.length) {
        word.value = words[index]
        // console.log(word.value)
    }
}

</script>


<template>
    <HomeCont repeat_active>

        <div class="learn_screen">
            <WordPanel @next_word="next_word()" state="0" :word="word"></WordPanel>
        </div>

    </HomeCont>
</template>


<style scoped></style>