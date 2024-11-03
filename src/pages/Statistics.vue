<script setup>
import HomeCont from '@/components/HomeCont.vue';
import { ref, onMounted } from 'vue';
import { get_stats } from '@/utils/stats';
import { LocalizationManager } from '@/utils/localization_manager';

const props = defineProps({
    known_words: {
        type: Number,
        default: 0
    },
    learning_words: {
        type: Number,
        default: 0
    },
    learned_words: {
        type: Number,
        default: 0
    },
    problematic_words: {
        type: Number,
        default: 0
    }
})

const stats = ref(false)



onMounted(async () => {
    const stats_data = await get_stats()

    if (stats!=undefined){
        stats.value = stats_data
    }
})




</script>


<template>
    <HomeCont stats_active>


        <div class="stats_screen">

            <div class="stats_cont">

                <div class="part_title">
                    {{ LocalizationManager.get_string("stats_title") }}
                </div>

                <div class="stats_list">



                    <div class="stats_line">
                        <div class="stat_name known">{{ LocalizationManager.get_string("stats_known") }}</div>
                        <div class="stat_value">{{ stats.known_words || 0 }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name learned">{{ LocalizationManager.get_string("stats_learned") }}</div>
                        <div class="stat_value">{{ stats.learned_words || 0 }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name learning">{{ LocalizationManager.get_string("stats_repeat") }}</div>
                        <div class="stat_value">{{ stats.learning_words || 0 }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name problematic">{{ LocalizationManager.get_string("stats_problematic") }}</div>
                        <div class="stat_value">{{ stats.problematic_words || 0 }}</div>
                    </div>
                </div>
            </div>

        </div>
    </HomeCont>
</template>


<style scoped>

</style>