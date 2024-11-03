<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { add_word } from '@/utils/categories';

import { reactive } from "vue";

const props = defineProps(["category_id"])


// Данные формы
const word = reactive({
    english: "",
    russian: "",
    transcription: "",
    examples: [
        { russian: "", english: "" }
    ],
});

// Функция добавления примера
const addExample = () => {
    if (word.examples.length < 5) {
        word.examples.push({ russian: "", english: "" });
    }
};

// Функция удаления примера
const removeExample = (index) => {
    word.examples.splice(index, 1);
};

// Функция обработки отправки формы
const submitForm = async () => {
    const temp_word = JSON.parse(JSON.stringify(word));


    temp_word.category_id = props["category_id"] * 1

    await add_word(temp_word)

    
    word.english = "";
    word.russian = "";
    word.transcription = "";
    word.examples = [{ russian: "", english: "" }];
};
</script>


<template>


    <HomeCont>

        <div class="learn_screen">
            <div class="create_word_cont">
                <div class="word-form">
                    <h2>Добавить новое слово</h2>

                    <form @submit.prevent="async () => {await submitForm()}">
                        <!-- Поле English -->
                        <div>
                            <label for="english">Английское слово:</label>
                            <input type="text" v-model="word.english" required />
                        </div>

                        <!-- Поле Russian -->
                        <div>
                            <label for="russian">Русское слово:</label>
                            <input type="text" v-model="word.russian" required />
                        </div>

                        <!-- Поле Transcription -->
                        <div>
                            <label for="transcription">Транскрипция:</label>
                            <input type="text" v-model="word.transcription" />
                        </div>

                        <!-- Поле Examples -->
                        <div>
                            <label>Примеры:</label>
                            <div v-for="(example, index) in word.examples" :key="index" class="example-inputs">
                                <input type="text" placeholder="Пример на русском" v-model="example.russian" required />
                                <input type="text" placeholder="Пример на английском" v-model="example.english"
                                    required />
                                <button type="button" @click="removeExample(index)" v-if="word.examples.length > 1">
                                    Удалить
                                </button>
                            </div>
                            <button type="button" @click="addExample" :disabled="word.examples.length >= 5">
                                Добавить пример
                            </button>
                        </div>

                        <!-- Кнопка отправки формы -->
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>

    </HomeCont>

</template>


<style scoped></style>