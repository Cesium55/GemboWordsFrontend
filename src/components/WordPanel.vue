<script setup>
import { integer } from '@vuelidate/validators';
import { ref, onMounted } from 'vue';
import WordButtons from './WordButtons.vue';
import IconButton from './IconButton.vue';
import speak from '@/utils/speak';


const props = defineProps({
    state: integer,
    new_word: Boolean,
    ru_first: Boolean,
    word_obj: Object
})

const emits = defineEmits(["next_word"])

const panel_state = ref(props.state)
/*
0 - word with 4 buttons
1 - word with example and 3 buttons
2 - word with everything and 2 buttons
*/

const word = ref(props.word_obj)
/*
{
    ru: string,
    eng: string,
    eng_examples: List[string],
    ru_examples: List[string],
    categories: List[string],
    transcription: string
}
*/

function onUpClicked(e){
    console.log(1)
    panel_state.value = 2
}
function onDownClicked(e){
    console.log(2)
    panel_state.value = 1
}
function onLeftClicked(e){
    console.log(3)
    panel_state.value = 0
    emit("next_word")
    
}

function keyClicked(e){
    console.log(4)
    console.log(e.key == "ArrowUp")
    if (e.key === 'ArrowDown') onDownClicked()
    if (e.key === 'ArrowUp') onUpClicked()
    if (e.key === 'ArrowLeft') onLeftClicked()
}


    window.addEventListener('keydown', (e) => keyClicked(e));




</script>


<template>

    <div class="word_cont_no_padding">
        <transition-group name="tanim">
            <div class="top_info">
                <div class="categories">Categories:&nbsp;
                    <div class="category" v-for="(c, index) in word.categories">{{ c }}<span
                            v-if="index < word.categories.length - 1">,&nbsp;</span></div>
                </div>
                <div class="word_repetition">
                    {{ new_word ? "New word" : "Repeating word" }}
                </div>
            </div>
            <div class="word_cont">


                <div class="word_titles">
                    <transition-group name="aanim">
                        <div class="eng_word_title_cont left_title_cont title_cont"
                            v-if="(!ru_first) || ([2].includes(panel_state))">
                            <div class="word_title">
                                {{ word.eng }}
                            </div>


                            <div class="transcription">
                                <div>[ {{ word.transcription }} ]</div>
                                <IconButton @click="speak(word.eng)">
                                    <img src="@/assets/icons/dark/speak.svg" alt="say">
                                </IconButton>
                            </div>

                        </div>

                        <div class="fake" v-if="panel_state == 2"></div>

                        <div class="ru_word_title_cont right_title_cont title_cont"
                            v-if="(ru_first) || ([2].includes(panel_state))">
                            <div class="word_title">
                                {{ word.ru }}
                            </div>
                        </div>
                    </transition-group>

                </div>


                <div class="example_titles" v-if="([1, 2].includes(panel_state))">
                    <p class="ex_title" v-if="(panel_state == 2) || ((panel_state == 1) && (!ru_first))">Examples</p>
                    <p class="ex_title" v-if="(panel_state == 2) || ((panel_state == 1) && (ru_first))">Примеры</p>

                </div>

                <!-- <div class="examples">

                    <div class="example_list_cont" v-if="(panel_state == 2) || ((panel_state == 1) && (!ru_first))">

                        <div class="example_list">
                            <div class="example" v-for="(ex, index) in word.eng_examples">
                                <IconButton @click="speak(ex)">
                                    <img src="@/assets/icons/dark/speak.svg" alt="say">
                                </IconButton>
                                <div class="example_text">
                                    {{ index + 1 }}) {{ ex }}
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="example_list_cont" v-if="(panel_state == 2) || ((panel_state == 1) && (ru_first))">

                        <div class="example_list">
                            <div class="example" v-for="(ex, index) in word.ru_examples">{{ index + 1 }}) {{ ex }}
                            </div>
                        </div>

                    </div>
                </div> -->

                <div class="examples" v-if="([1, 2].includes(panel_state))">
                    <div class="example_pare" v-for="(ex, index) in word.eng_examples">

                        <div class="example" v-if="(panel_state == 2) || ((panel_state == 1) && (!ru_first))">
                            <IconButton @click="speak(ex)">
                                    <img src="@/assets/icons/dark/speak.svg" alt="say">
                                </IconButton>
                                <div class="example_text">
                                    {{ index + 1 }}) {{ ex }}
                                </div>
                        </div>

                        <div class="example" v-if="(panel_state == 2) || ((panel_state == 1) && (ru_first))">
                            {{ index + 1 }}) {{ word.ru_examples[index] }}
                        </div>

                    </div>
                </div>



            </div>

        </transition-group>

            <WordButtons :learn="new_word" :example="panel_state == 0" :known="new_word" :remember="!new_word"
                :repeat="!new_word" :show="panel_state != 2" @example_clicked="panel_state = 1"
                @show_clicked="panel_state = 2" @known_clicked="panel_state = 0;$emit('next_word')" @remember_clicked="panel_state = 0">
            </WordButtons>

            <!-- <WordButtons learn example known show>
        </WordButtons> -->
        
    </div>
</template>


<style scoped>
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

.top_info {
    display: flex;
    justify-content: space-between;
}

.word_repetition {
    margin-top: 10px;
    margin-right: 10px;
    color: gray;
}

.categories {
    display: flex;
    margin-top: 10px;
    margin-left: 10px;
    color: gray;
}

.word_cont {
    padding: 20px;
    height: 100%
}

.word_titles {
    display: flex;
    justify-content: space-between;

    /* padding-top: 10px; */
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: rgb(200, 200, 200)
}

.example_titles {
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 20px;
}

.examples {
    /* display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px; */

    max-height: 200px;
    overflow: auto; 

}
.example_pare{
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
}
.example_list_cont {
    width: 50%;
}

.example {

    display: flex;
    justify-content: left;
    align-items: center;

    flex: 1;


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








/* animations */

/* .tanim-enter-active, */
/* .move-leave-active {
    transition: all 0.3s ease;
} */

/* .tanim-enter-from {
    opacity: 0;
    transform: translateY(-20px) 0.5s ease;
}

tanim-leave-to {
    opacity: 0;
    transform: translateY(20px) 0.5s ease;
} */

/* Анимация перемещений */
.tanim-move {
    transition: all 0.2s ease;
}

/* .aanim-move{
    transition: all 0.1s ease;
} */
</style>