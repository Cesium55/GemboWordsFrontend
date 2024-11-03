<script setup>
import { integer } from '@vuelidate/validators';
import { ref, onMounted } from 'vue';
import WordButtons from './WordButtons.vue';
import IconButton from './IconButton.vue';
import { get_categories } from '@/utils/categories';
import { select_categories } from '@/utils/category_select_change';
import { LocalizationManager } from '@/utils/localization_manager';
import { create_category } from '@/utils/categories';


const props = defineProps({
    categories: Array,
    my_categories: Array
})
const theme = localStorage.getItem('theme') || 'light';
const add_cat_show = ref(false)
const new_category_name = ref("")


function toggle_add_cat_popup() {
    add_cat_show.value = !add_cat_show.value
}


// for (let i=0;i<categories.value.length;i++){
//     if ca
// }



// onMounted(() => {
//     const cats = get_categories()
//     console.log("Categories:")
//     console.log(cats)
// })

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


        <div class="custom_cats_top">

            <div class="part_title">
                {{ LocalizationManager.get_string("cats_custom") }}
            </div>


            <IconButton @click="toggle_add_cat_popup()">
                <img :src="'/icons/' + theme + '/plus.svg'" />
            </IconButton>

            <div class="new_category_panel" v-if="add_cat_show">
                <div class="new_category_title">
                    Add custom category
                </div>

                <div class="add_category_line">
                    <label for="new_cat">New category name</label>
                    <input type="text" name="new_cat" v-model="new_category_name">
                </div>

                <div class="add_category_line">

                    <button @click="async () => {await create_category(new_category_name)}">
                        Create category
                    </button>

                </div>
            </div>

        </div>



        <div class="category_list" v-if="my_categories.length > 0">
            <div class="category_and_words_line" v-for="(category, index) in my_categories">

                <div class="category_line">
                    <div class="left_par_of_category_line">
                        <div class="category_icon"><img class="category_icon_image"
                                :src="category.picture ? `/icons/categories/${category.picture}.svg` : ('/icons/' + theme + '/category.svg')">
                        </div>
                        <div class="category_name">


                            <RouterLink :to="'/category/' + category.id">{{ category.name }}</RouterLink>
                        </div>
                        <!-- <div class="dropdown_button">
                            <IconButton @click="() => dropdown(index)">
                                <img src="@/assets/icons/dark/arrow_down.svg" alt="dropdown">
                            </IconButton>
                        </div> -->
                    </div>

                    <div class="right_par_of_category_line">
                        <div class="active_check">
                            <input class="active_checkbox" type="checkbox" :name="'c' + category.id + 'check'"
                                :id="'c' + category.id + 'check'" v-model="category.selected"
                                @change="select_categories(category.id, category.selected)">
                            <!--  :checked="category.selected" -->
                        </div>
                    </div>
                </div>

            </div>


        </div>

        <div v-else class="gray_warning">
            {{ LocalizationManager.get_string("cats_no_custom") }}
        </div>



        <div class="part_title">
            {{ LocalizationManager.get_string("cats_cats") }}
        </div>

        <div class="category_list">
            <div class="category_and_words_line" v-for="(category, index) in categories">

                <div class="category_line">
                    <div class="left_par_of_category_line">
                        <div class="category_icon"><img class="category_icon_image"
                                :src="category.picture ? `/icons/categories/${category.picture}.svg` : ('/icons/' + theme + '/category.svg')">
                        </div>
                        <div class="category_name">


                            <RouterLink :to="'/category/' + category.id">{{ LocalizationManager.get_lang() == "eng" ?
                                category.name : category.name_translated }}</RouterLink>
                        </div>
                        <!-- <div class="dropdown_button">
                            <IconButton @click="() => dropdown(index)">
                                <img src="@/assets/icons/dark/arrow_down.svg" alt="dropdown">
                            </IconButton>
                        </div> -->
                    </div>

                    <div class="right_par_of_category_line">
                        <div class="active_check">
                            <input class="active_checkbox" type="checkbox" :name="'c' + category.id + 'check'"
                                :id="'c' + category.id + 'check'" v-model="category.selected"
                                @change="select_categories(category.id, category.selected)">
                            <!--  :checked="category.selected" -->
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>






</template>


<style scoped></style>