<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { ref, onMounted } from 'vue';
import { get_category } from '@/utils/get_category';
import { class_by_relation, state_description_by_relation } from '@/utils/states_manager';

const props = defineProps(["category_id"])

const category = ref(false)

onMounted(async () => {
    category.value = await get_category(props["category_id"])
})

</script>


<template>
    <HomeCont >

        <div class="learn_screen">
            <div class="category_cont_no_padding">
                <div class="part_title">
                    {{ category.name }}
                </div>

                <div class="word_list">
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

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </HomeCont>
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

.word_list {
    flex-grow: 1;
    overflow: auto;
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
    display: flex;
    align-items: center;
}

.word_line {
    margin-top: 5px;
    font-size: 18px;
    color: gray;
    padding: 10px 0;
}

.category_icon {
    width: 40px;
    display: flex;
    justify-content: space-around;
}

.category_icon_image {
    max-width: 40px;
}


.word_line_left {
    position: relative;
    padding-left: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}


.word_line_left:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    /* Центрируем по вертикали */
    width: 3px;
    /* Размер квадрата */
    height: 80%;
    /* Размер квадрата */
}

.word_left_top{
    display: flex;
    color: whitesmoke;
    gap: 20px;
    width: 50%;
    display: flex;
    justify-content: space-between;
}

.known::before {
    background-color: #F7C815;
}

.learning::before {
    background-color: #27a82e;
}

.learned::before {
    background-color: #3498db;
}

.problematic::before {
    background-color: #c10000;
}

.new::before {
    background-color: rgb(200, 200, 200);
}
</style>