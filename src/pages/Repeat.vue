<script setup>
import HomeCont from '@/components/HomeCont.vue';
import WordPanel from '@/components/WordPanel.vue';
import { ref } from 'vue';


const word_arr = ref(
    [
    {
        ru: "лев",
        eng: "lion",
        eng_examples: ["Lion is a king of all animals","Lion is a king of all animals","Lion is a king of all animals","Lion is a king of all animals","Lion is a king of all animals","Lion is a king of all animals","Lion is a king of all animals",
            "Lion is a king of all animals", "pervii skill i tretii blat uui uiuig uiguig ugiugig ugiuig "],
        ru_examples: ["Лев король всех зверей", "первый скилл и трейтий блядь"],
        categories: ["Animals", "A0"],
        transcription: "ˈlaɪən"
    }
    ]
)
</script>


<template>
<HomeCont repeat_active>
    <div class="learn_screen">
            <WordPanel state="0" :word_obj="word_arr[0]"></WordPanel>
    </div>
</HomeCont>
</template>


<style scoped>

</style>