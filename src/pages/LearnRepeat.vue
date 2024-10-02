<script setup>
import HomeCont from '@/components/HomeCont.vue';
import WordPanel from '@/components/WordPanel.vue';
import { ref } from 'vue';

const word_arr = 
    [
    {
        ru: "Шерстопрядение",
        eng: "Wool spinning",
        eng_examples: ["She owns a llama named Hopi, whose wool she shears, spins and dyes for her knitting.", 
        "Rugmaking is demonstrated, wool carding and spinning, handweaving and basketmaking, and these items and Appalachian toys, jellies and ceramics are for sale."],
        ru_examples: ["У нее есть лама по имени Хопи, шерсть которой она стрижет, прядет и красит для своего вязания.", 
        "Демонстрируется изготовление ковров, чесание и прядение шерсти, ручное плетение и плетение корзин, и эти предметы, а также аппалачские игрушки, желе и керамика выставлены на продажу."],
        categories: ["Fruits", "A0"],
        transcription: "wʊl ˈspɪnɪŋ"
    },
    {
        ru: "яблоко",
        eng: "apple",
        eng_examples: ["I have two apples", "I like apples and oranges"],
        ru_examples: ["У меня есть два яблока", "Мне нравятся яблоки и оранжевые"],
        categories: ["Fruits", "A0"],
        transcription: "ˈæpl"
    },
    {
        ru: "лев",
        eng: "lion",
        eng_examples: ["Lion is a king of all animals", "pervii skill i tretii blat"],
        ru_examples: ["Лев король всех зверей", "первый скилл и трейтий блядь"],
        categories: ["Animals", "A0"],
        transcription: "ˈlaɪən"
    }
    ]


const index = ref(0)
</script>


<template>
<HomeCont lr_active>
    <div class="learn_screen">
            <WordPanel state="0" :word_obj="word_arr[index]" new_word ru_first @next_word="console.log('next');index++"></WordPanel>
    </div>
</HomeCont>
</template>


<style scoped>

</style>