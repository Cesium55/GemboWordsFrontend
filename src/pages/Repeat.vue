<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { onMounted, ref } from 'vue';
import WordButtons from '@/components/WordButtons.vue';
import WordPanel from '@/components/WordPanel.vue';
import { get_words } from '@/utils/fake_data';
import { get_words_to_repeat } from '@/utils/get_words';
import Link from '@/components/Link.vue';

import { start_learning, already_know, repeat_word, forget_word, next_repeat } from '@/utils/gembow';




let words = []
let index = 0
const word = ref(false)
const time_until_repeat = ref(false)

onMounted(async () => {
    words = await get_words_to_repeat()
    console.log(words)

    if (words.length) {
        word.value = words[0]
    }
    else {
        const next_repeat_time = await next_repeat()
        const targetDate = new Date(next_repeat_time);

        // Получаем текущее время
        const now = new Date();

        // Вычисляем разницу в миллисекундах
        const diffInMilliseconds = targetDate - now;

        // Переводим разницу в минуты
        const diffInMinutes = diffInMilliseconds / (1000 * 60);

        // Округляем до целого в большую сторону
        const roundedMinutes = Math.ceil(diffInMinutes);

        time_until_repeat.value = roundedMinutes
    }

})



const next_word = async () => {
    index++
    console.log(`index: ${index}\nlength: ${words.length}`)
    if (index < words.length) {
        word.value = words[index]
    } else if (index == words.length) {
        console.log(words)
        const new_words = await get_words_to_repeat()
        if (new_words) {
            words.push(...new_words)
            word.value = words[index]
        }
        else {
            word.value = false
            const next_repeat_time = await next_repeat()
            const targetDate = new Date(next_repeat_time);

            // Получаем текущее время
            const now = new Date();

            // Вычисляем разницу в миллисекундах
            const diffInMilliseconds = targetDate - now;

            // Переводим разницу в минуты
            const diffInMinutes = diffInMilliseconds / (1000 * 60);

            // Округляем до целого в большую сторону
            const roundedMinutes = Math.ceil(diffInMinutes);

            time_until_repeat.value = roundedMinutes
        }
    }
}



</script>


<template>
    <HomeCont repeat_active>

        <div class="learn_screen">
            <WordPanel @repeat_clicked="async () => { await forget_word(word.id); await next_word() }"
                @remember_clicked="async () => { await repeat_word(word.id); await next_word() }" state="0"
                :word="word">

                <div class="warning_cont">
                    <div class="warning_line">
                        No words to repeat
                    </div>

                    <div class="warning_line" v-if="time_until_repeat && time_until_repeat>=0">
                        Time until next repeat: {{ time_until_repeat }} min
                    </div>

                    <div class="warning_line">
                        You can learn some words
                        <Link to="learn">here</Link>
                    </div>
                </div>

            </WordPanel>
        </div>

    </HomeCont>
</template>


<style scoped>

</style>