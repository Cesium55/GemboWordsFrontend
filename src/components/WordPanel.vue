<script setup>
import { integer } from '@vuelidate/validators';
import { ref, onMounted } from 'vue';
import WordButtons from './WordButtons.vue';
import IconButton from './IconButton.vue';
import speak from '@/utils/speak';
import { get_new_words } from '@/utils/get_words';
import { formatBold, formatClear } from '@/utils/formaters';
import { LocalizationManager } from '@/utils/localization_manager';


const theme = localStorage.getItem('theme') || 'light';

const props = defineProps({
    state: integer,
    new_word: Boolean,
    ru_first: Boolean,
    word: Object
})

const emits = defineEmits([
    "next_word",
    "learn_clicked",
    "known_clicked",
    "remember_clicked",
    "repeat_clicked",
    "example_clicked",
    "show_clicked"])

const panel_state = ref(props.state)
/*
0 - word with 4 buttons
1 - word with example and 3 buttons
2 - word with everything and 2 buttons
*/

// const word = ref(props.word_obj)
/*
{
    ru: string,
    eng: string,
    examples: List[Example]
    categories: List[Category],
    transcription: string
}
*/

function onUpClicked(e) {
    // console.log(1)
    panel_state.value = 2
}
function onDownClicked(e) {
    // console.log(2)
    if (panel_state.value != 2) {
        panel_state.value = 1
    }
}
function onLeftClicked(e) {
    // console.log(3)
    panel_state.value = 0
    if (props["new_word"]) {
        emits("known_clicked")
    }
}

function onRightClicked(e) {
    panel_state.value = 0
    if (props["new_word"]) {
        emits("learn_clicked")
    }
}


function keyClicked(e) {
    // console.log(4)
    // console.log(e.key == "ArrowUp")
    if (e.key === 'ArrowDown') onDownClicked()
    if (e.key === 'ArrowUp') onUpClicked()
    if (e.key === 'ArrowLeft') onLeftClicked()
    if (e.key === 'ArrowRight') onRightClicked()
}


window.addEventListener('keyup', (e) => keyClicked(e));




</script>


<template>
    <div class="word_cont_no_padding" v-if="!word">

        <slot>
            No words here
        </slot>

    </div>
    <div class="word_cont_no_padding" v-if="word">
        <transition-group name="tanim">
            <div class="top_info" key="top_info">
                <div class="categories">{{ LocalizationManager.get_string("word_categories") }}: {{ word.categories.map((x) =>x.name).join(", ") }}
                </div>
                <div class="word_repetition">
                    {{ new_word ? LocalizationManager.get_string("word_new_word") : LocalizationManager.get_string("word_repeat") }}
                </div>
            </div>
            <div class="word_cont" key="word_cont">


                <div class="word_titles">
                    <div class="eng_word_title_cont left_title_cont title_cont"
                        v-if="(!ru_first) || ([2].includes(panel_state))">
                        <div class="word_title">
                            {{ word.english }}
                        </div>


                        <div class="transcription">
                            <div>[ {{ word.transcription }} ]</div>
                            <IconButton @click="speak(formatClear(word.english))">
                                <img :src="'/icons/' + theme +'/speak.svg'" alt="say">
                            </IconButton>
                        </div>

                    </div>

                    <div class="fake" v-if="panel_state == 2"></div>

                    <div class="ru_word_title_cont right_title_cont title_cont"
                        v-if="(ru_first) || ([2].includes(panel_state))">
                        <div class="word_title">
                            {{ word.russian }}
                        </div>
                    </div>

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
                    <div class="example_pare" v-for="(ex, index) in word.examples">

                        <div class="example" v-if="(panel_state == 2) || ((panel_state == 1) && (!ru_first))">
                            <IconButton @click="speak(formatClear(ex.english))">
                                <img :src="'/icons/' + theme +'/speak.svg'" alt="say">
                            </IconButton>
                            <div class="example_text">
                                {{ index + 1 }}) <span v-html="formatBold(ex.english)"></span>
                            </div>
                        </div>

                        <div class="example" v-if="(panel_state == 2) || ((panel_state == 1) && (ru_first))">
                            <div class="example_text">
                                {{ index + 1 }}) <span v-html="formatBold(ex.russian)"> </span>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </transition-group>

        <WordButtons :learn="new_word" :example="panel_state == 0" :known="new_word" :remember="!new_word"
            :repeat="!new_word" :show="panel_state != 2" @example_clicked="panel_state = 1"
            @show_clicked="panel_state = 2" @known_clicked="panel_state = 0; $emit('known_clicked')"
            @remember_clicked="panel_state = 0; $emit('remember_clicked')" @learn_clicked="panel_state = 0;$emit('learn_clicked')"
            @repeat_clicked="panel_state = 0; $emit('repeat_clicked')">
        </WordButtons>

        <!-- <WordButtons learn example known show>
        </WordButtons> -->

    </div>
</template>


<style scoped>

</style>