<script setup>
import MenuItem from './MenuItem.vue';
import { LocalizationManager } from '@/utils/localization_manager';

const props = defineProps({
    home_active: Boolean,
    stats_active: Boolean,
    learn_active: Boolean,
    repeat_active: Boolean,
    lr_active: Boolean,
    cats_active: Boolean
})
const theme = localStorage.getItem('theme') || 'light';




</script>


<template>

    <div class="home_cont">
        <div class="left_menu_cont">
            <div class="left_menu">

                <MenuItem :active="home_active" :text="LocalizationManager.get_string('menu_home')" to="/">
                <img class="menu_img" :src="'/icons/' + theme +'/home.svg'" />
                </MenuItem>

                <MenuItem :active="stats_active" :text="LocalizationManager.get_string('menu_stats')" to="/stats">
                <img class="menu_img" :src="'/icons/' + theme +'/stats.svg'" />
                </MenuItem>

                <MenuItem :active="learn_active" :text="LocalizationManager.get_string('menu_learn')" to="/learn">
                <img class="menu_img" :src="'/icons/' + theme +'/learn.svg'" />
                </MenuItem>

                <MenuItem :active="repeat_active" :text="LocalizationManager.get_string('menu_repeat')" to="/repeat">
                <img class="menu_img" :src="'/icons/' + theme +'/repeat.svg'" />
                </MenuItem>

                <!-- <MenuItem :active="lr_active" :text="LocalizationManager.get_string('menu_learn_repeat')" to="/mixed">
                <img class="menu_img" :src="'/icons/' + theme +'/mixed.svg'" />
                </MenuItem> -->

                <MenuItem :active="cats_active" :text="LocalizationManager.get_string('menu_cats')" to="/categories">
                <img class="menu_img" :src="'/icons/' + theme +'/category.svg'" />
                </MenuItem>


            </div>
        </div>

        <div class="content">
            <slot>¡DEFAULT CONTENT!</slot>
        </div>
    </div>

</template>


<style scoped>

</style>