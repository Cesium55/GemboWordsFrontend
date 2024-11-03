<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { ref, onMounted } from 'vue';
import { get_category } from '@/utils/get_category';
import { class_by_relation, state_description_by_relation } from '@/utils/states_manager';
import { LocalizationManager } from '@/utils/localization_manager';
import IconButton from '@/components/IconButton.vue';
import { delete_word } from '@/utils/categories';

const props = defineProps(["category_id"])
const theme = localStorage.getItem('theme') || 'light';

const category = ref(false)

onMounted(async () => {
    category.value = await get_category(props["category_id"])
})


async function handle_delete(params) {
    if (confirm("Are you sure")){
        await delete_word(params)
    }
}

</script>


<template>
    <HomeCont>

        <div class="learn_screen">
            <div class="category_cont_no_padding">
                <div class="custom_cats_top">
                    <div class="part_title">
                        <div>
                            {{ LocalizationManager.get_lang() == "eng" ? category.name : category.name_translated }}
                        </div>



                    </div>
                    <RouterLink :to="'/add_word/' + props['category_id']">
                        <IconButton v-if="category.owner_id">
                            <img :src="'/icons/' + theme + '/plus.svg'" />
                        </IconButton>

                    </RouterLink>
                </div>

                <div class="word_list" v-if="category.words && category.words.length">
                    <div class="word_line" v-for="(word_item, index) in category.words">
                        <div :class="'word_line_left ' + class_by_relation(word_item.relation)">
                            <div class="word_left_top">
                                <div class="word_english">
                                    {{ word_item.word.english }}
                                </div>
                                <div class="word_russian">
                                    {{ word_item.word.russian }}
                                </div>
                            </div>
                            <div class="word_left_bottom">
                                {{ state_description_by_relation(word_item.relation) }}
                            </div>
                        </div>

                        <div class="word_line_right">
                            <IconButton v-if="category.owner_id" @click="async () => { await handle_delete(word_item.word.id)}">
                                <img :src="'/icons/' + theme + '/bin.svg'" />
                            </IconButton>
                        </div>
                    </div>
                </div>

                <div class="gray_warning" v-else>
                    No words here yet
                </div>
            </div>
        </div>

    </HomeCont>
</template>


<style scoped></style>