<script setup>
import { integer } from '@vuelidate/validators';
import { ref, onMounted } from 'vue';
import WordButtons from './WordButtons.vue';
import IconButton from './IconButton.vue';


const props = defineProps({
    categories: Array
})



/*
Category
{
            "id": int,
            "name": string,
            "picture": string / null,
            "owner_id": int / null,
            "words": [
                {
                    "id": int,
                    "russian": string,
                    "english": string,
                    "transcription": string / null
                }
            ]
        }

*/

const dropdown_states = ref(Array(props.categories.length).fill(false))

function dropdown(n) {
    dropdown_states.value[n] = !dropdown_states.value[n]
}

</script>


<template>

    <div class="category_cont_no_padding">
        <div class="part_title">
            Categories
        </div>

        <div class="category_list">
            <div class="category_and_words_line" v-for="(category, index) in categories">

                <div class="category_line">
                    <div class="left_par_of_category_line">
                        <div class="category_icon"><img src="@/assets/icons/dark/category.svg"></div>
                        <div class="category_name">{{ category.name }}</div>
                        <div class="dropdown_button">
                            <IconButton @click="() => dropdown(index)">
                                <img src="@/assets/icons/dark/arrow_down.svg" alt="dropdown">
                            </IconButton>
                        </div>
                    </div>

                    <div class="right_par_of_category_line">
                        <div class="active_check">
                            <input class="active_checkbox" type="checkbox" :name="'c' + category.id + 'check'"
                                :id="'c' + category.id + 'check'" :checked="index % 2">

                        </div>
                    </div>
                </div>

                <div class="words_list" v-if="dropdown_states[index]">
                    <div class="word_line" v-for="(word, index) in category.words">
                        {{ word.english }}
                    </div>
                </div>

            </div>
        </div>
    </div>






</template>


<style scoped>
.category_cont_no_padding {
    width: 600px;
    height: 50%;
    border: 1px #27a82e solid;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: top;

    overflow: auto;
    padding: 30px;
    gap: 20px;

}

.part_title {
    font-size: 30px;
    color: #27a82e;
}

.category_list {
    margin-left: 30px;
}

.category_line {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}

.left_par_of_category_line {
    display: flex;
}

.category_name {
    font-size: 20px;
    margin-left: 10px;
}


.active_check {
    height: 100%;
}

.active_checkbox {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 25px;
    /* Ширина чекбокса */
    height: 25px;
    /* Высота чекбокса */
    background-color: #f0f0f0;
    /* Цвет фона */
    /* border: 1px solid #fff; Рамка */
    border-radius: 3px;
    /* Скругление углов */
    cursor: pointer;
}

.active_checkbox:checked {
    background-color: #27a82e;
    /* Цвет фона при выборе */
    /* border-color: green; */
    position: relative;
}



.active_checkbox:checked::before {
    content: '✔';
    /* Символ галочки */
    display: block;
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.words_list{
    margin-left: 30px;
}
.word_line{
    margin-top: 5px;
    font-size: 18px;
    color: gray
}

</style>