<script setup>
import HomeCont from '@/components/HomeCont.vue';
import CategoriesPanel from '@/components/CategoriesPanel.vue';
import CategoryPanel from '@/components/CategoriesPanel.vue';
// import { get_categories } from '@/utils/fake_data';
import { get_categories } from '@/utils/categories';
import { onMounted, ref } from 'vue';


const categories = ref([])
const my_cats = ref(false)

onMounted(async () => {

    const cats = await get_categories() || []
    if (cats.length) {
        cats.sort((x, y) => y["sort_order"] - x["sort_order"])
        categories.value = cats.filter((x) => { return x.owner_id == null })
        my_cats.value = cats.filter((x) => { return x.owner_id != null })
    }
    // console.log(my_cats)

    // console.log(categories.value)
})

</script>


<template>
    <HomeCont cats_active>
        <div class="learn_screen">
            <CategoriesPanel :categories="categories" :my_categories="my_cats" />
        </div>
    </HomeCont>
</template>


<style scoped></style>