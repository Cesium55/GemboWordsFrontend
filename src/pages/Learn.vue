<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { onMounted, ref } from 'vue';
import WordButtons from '@/components/WordButtons.vue';
import WordPanel from '@/components/WordPanel.vue';
import { get_words } from '@/utils/fake_data';
import { get_new_words } from '@/utils/get_words';
import Link from '@/components/Link.vue';

import { start_learning, already_know } from '@/utils/gembow';


// import fetch from '@/utils/fetches';

// const word_arr = ref(
//     [{
//         ru: "яблоко",
//         eng: "apple",
//         eng_examples: ["I have two apples", "I like apples and oranges"],
//         ru_examples: ["У меня есть два яблока", "Мне нравятся яблоки и оранжевые"],
//         categories: ["Fruits", "A0"],
//         transcription: "ˈæpl"
//     },
//     {
//         ru: "лев",
//         eng: "lion",
//         eng_examples: ["Lion is a king of all animals", "pervii skill i tretii blat"],
//         ru_examples: ["Лев король всех зверей", "первый скилл и трейтий блядь"],
//         categories: ["Animals", "A0"],
//         transcription: "ˈlaɪən"
//     }
//     ]
// )


const theme = localStorage.getItem('theme') || 'light';

let words = []
let index = 0
const word = ref(false)
const limit_reached = ref(false)

onMounted(async () => {
    words = await get_new_words()

    if (words.is_error == true) {
        console.log("is error handled")
        limit_reached.value = words.detail
        console.log(words.detail)
        word.value = false
    }
    else {
        console.log(words)

        if (words.length) {
            word.value = words[0]
        }
    }

})

const next_word = async () => {
    index++
    console.log(`index: ${index}\nlength: ${words.length}`)
    if (index < words.length) {
        word.value = words[index]
    } else if (index == words.length) {
        console.log(words)
        const new_words = await get_new_words()

        if (words.is_error == true) {
            limit_reached.value = words.detail
            word.value = false
        }
        else {
            if (new_words) {
                words.push(...new_words)
                word.value = words[index]
            }
            else {
                word.value = false
            }
        }
    }
}

async function handle_start_learn(params) {
    const result = await start_learning(params)
    if (result.is_error == true) {
        limit_reached.value = result.detail
        word.value = false
    }
    else{
        await next_word()
    }
}



</script>


<template>
    <HomeCont learn_active>

        <div class="learn_screen">
            <WordPanel @learn_clicked="async () => { await handle_start_learn(word.id) }"
                @known_clicked="async () => { await already_know(word.id); await next_word() }" state="0" :word="word"
                new_word>

                <div class="warning_cont" v-if="!limit_reached">
                    <div class="warning_line">
                        No words to learn
                    </div>
                    <div class="warning_line">
                        Please select some new categories
                        <Link to="categories">here</Link>
                    </div>
                </div>


                <div class="warning_cont" v-if="limit_reached">
                    <div class="warning_line">
                        {{ limit_reached }}
                    </div>
                </div>

            </WordPanel>
        </div>

    </HomeCont>
</template>


