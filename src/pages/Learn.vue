<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { ref } from 'vue';
import WordButtons from '@/components/WordButtons.vue';
import WordPanel from '@/components/WordPanel.vue';
import { get_words } from '@/utils/fake_data';


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





let words = get_words()
// const url = 'http://185.193.137.147/test/words';
// const url = ' http://127.0.0.1:8000/test/words';
// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json(); // Преобразуем ответ в формат JSON
//   })
//   .then(data => {
//     console.log(data); // Выводим данные в консоль
//     words = data
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error); // Обработка ошибок
//   });


let index = 0

const word = ref(words[0])



function next_word(){
    index++

    if (index < words.length){
        word.value = words[index]
        // console.log(word.value)
    }
}

</script>


<template>
    <HomeCont learn_active>

        <div class="learn_screen">
            <WordPanel @next_word="next_word()" state="0" :word="word" new_word></WordPanel>
        </div>

    </HomeCont>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

.learn_screen {

    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.word_cont_no_padding {
    width: 800px;
    min-height: 400px;
    max-height: 600px;
    border: 1px #27a82e solid;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}

.word_cont {
    padding: 20px;
    height:100%
}

.word_titles {
    display: flex;
    justify-content: space-between;

    padding-top: 20px;
    padding-left: 50px;
    padding-right: 50px;
}

/* .title_cont {
    margin-top: 20px;
} */

/* .left_title_cont {
    margin-left: 50px;
}

.right_title_cont {
    margin-right: 50px;
} */

.word_title {
    font-size: 30px;
}

.transcription {
    margin-top: 20px;
    color: rgb(200, 200, 200)
}

.example_titles{
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 20px;
}

.examples {
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;

    max-height: 300px;
    overflow: auto;

}

.example_list_cont{
    width: 50%;
}

.example {
    padding-left: 10px;
    font-size: 20px;
    margin-top: 19px;
    color: #e0e0e0;
    overflow: auto;
}

.ex_title {
    font-size: 25px;
    color: #27a82e;
    width: 50%;
}
</style>