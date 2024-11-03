<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { onMounted, ref } from 'vue';
import WordButtons from '@/components/WordButtons.vue';
import WordPanel from '@/components/WordPanel.vue';
import { get_words_to_repeat, get_new_words } from '@/utils/get_words';
import Link from '@/components/Link.vue';

import { start_learning, already_know, repeat_word, forget_word, next_repeat } from '@/utils/gembow';




let words = []
let words_to_learn = []
let words_to_repeat = []
let index = 0
const word = ref(false)
const time_until_repeat = ref(false)
const no_words = ref(false)
const limit_reached = ref(false)

onMounted(async () => {
    words_to_repeat = await get_words_to_repeat()
    
    for (let i = 0; i < words_to_repeat.length; i++) {
        words_to_repeat[i].repeating = true
    }

    console.log(words_to_repeat)

    words_to_learn = await get_new_words()
    if (words_to_learn.is_error == true) {
        words_to_learn = []
    }

    console.log(words_to_learn)
    const combinedArray = words_to_learn.concat(words_to_repeat);
    combinedArray.sort(() => Math.random() - 0.5);

    words = combinedArray
    if (words.length) {
        word.value = words[0]
    }
    else {
        word.value = false
        no_words.value = "No words now, You should learn some words"
    }

})



const next_word = async () => {
    index++
    console.log(`index: ${index}\nlength: ${words.length}`)
    if (index < words.length) {
        word.value = words[index]
    } else if (index == words.length) {
        console.log(words)
        words_to_repeat = await get_words_to_repeat()
        for (let i = 0; i < words_to_repeat.length; i++) {
            words_to_repeat[i].repeating = true
        }
        console.log(words_to_repeat)

        words_to_learn = await get_new_words()
        if (words_to_learn.is_error == true) {
            words_to_learn = []
        }

        console.log(words_to_learn)
        const combinedArray = words_to_learn.concat(words_to_repeat);
        combinedArray.sort(() => Math.random() - 0.5);

        const new_words = combinedArray
        if (words.length) {
            word.value = words[0]
        }
        else {
            word.value = false
            no_words.value = "No words now, You should learn some words"
        }




        if (new_words) {
            words.push(...new_words)
            word.value = words[index]
        }
        else {
            word.value = false
            no_words.value = "No words now, You should learn some words"
        }
    }


    if (limit_reached.value && word.value.repeating==undefined){
        await next_word()
    }
}


async function handle_start_learn(params) {
    const result = await start_learning(params)
    if (result.is_error == true) {
        limit_reached.value = result.detail
        // word.value = false
    }
    await next_word()
}


</script>


<template>
    <HomeCont lr_active>

        <div class="learn_screen">
            <WordPanel @learn_clicked="async () => { await handle_start_learn(word.id) }"
                @known_clicked="async () => { await already_know(word.id); await next_word() }"
                @repeat_clicked="async () => { await forget_word(word.id); await next_word() }"
                @remember_clicked="async () => { await repeat_word(word.id); await next_word() }" state="0" :word="word" ru_first :new_word="word.repeating==undefined">
            <div class="warning_cont">
                <div class="warning_line" v-if="no_words">
                    {{ no_words }}
                </div>
                <div class="warning_line" v-if="limit_reached">
                    {{ limit_reached }}
                </div>
            </div>
            </WordPanel>
        </div>

    </HomeCont>
</template>


<style scoped></style>