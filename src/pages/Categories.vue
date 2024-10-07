<script setup>
import HomeCont from '@/components/HomeCont.vue';
import CategoryPanel from '@/components/CategoryPanel.vue';
import { get_categories } from '@/utils/fake_data';

const categories = get_categories()



</script>


<template>
<HomeCont cats_active>
    <div class="learn_screen">
        <CategoryPanel :categories="categories"/>
    </div>
</HomeCont>
</template>


<style scoped>

</style>