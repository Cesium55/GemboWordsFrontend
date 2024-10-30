<script setup>
import HomeCont from '@/components/HomeCont.vue';
import CategoriesPanel from '@/components/CategoriesPanel.vue';
import CategoryPanel from '@/components/CategoriesPanel.vue';
// import { get_categories } from '@/utils/fake_data';
import { get_categories } from '@/utils/categories';
import { onMounted, ref } from 'vue';


const categories = ref([])

onMounted(async () => {
    categories.value = await get_categories()
    console.log("Categories:")
    categories.value.sort((x, y) => y["sort_order"] - x["sort_order"])
    console.log(categories.value)
})

</script>


<template>
<HomeCont cats_active>
    <div class="learn_screen">
        <CategoriesPanel :categories="categories"/>
    </div>
</HomeCont>
</template>


<style scoped>

</style>