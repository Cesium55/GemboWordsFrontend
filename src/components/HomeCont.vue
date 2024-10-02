<script setup>
import MenuItem from './MenuItem.vue';

const props = defineProps({
    home_active: Boolean,
    stats_active: Boolean,
    learn_active: Boolean,
    repeat_active: Boolean,
    lr_active: Boolean,
    cats_active: Boolean
})

</script>


<template>

    <div class="home_cont">
        <div class="left_menu_cont">
            <div class="left_menu">

                <MenuItem :active="home_active" text="Home" to="/">
                <img class="menu_img" src="@/assets/icons/dark/home.svg" />
                </MenuItem>

                <MenuItem :active="stats_active" text="Statistics" to="/stats">
                <img class="menu_img" src="@/assets/icons/dark/stats.svg" />
                </MenuItem>

                <MenuItem :active="learn_active" text="Learn new words" to="/learn">
                <img class="menu_img" src="@/assets/icons/dark/learn.svg" />
                </MenuItem>

                <MenuItem :active="repeat_active" text="Repeat words" to="/repeat">
                <img class="menu_img" src="@/assets/icons/dark/repeat.svg" />
                </MenuItem>

                <MenuItem :active="lr_active" text="Learn & repeat" to="/mixed">
                <img class="menu_img" src="@/assets/icons/dark/mixed.svg" />
                </MenuItem>

                <MenuItem :active="cats_active" text="Manage categories" to="/categories">
                <img class="menu_img" src="@/assets/icons/dark/category.svg" />
                </MenuItem>


            </div>
        </div>

        <div class="content">
            <slot>¡DEFAULT CONTENT!</slot>
        </div>
    </div>

</template>


<style scoped>
.home_cont {
    height: 90vh;
    display: flex;
}

.left_menu_cont {
    width: 20vw;
    height: 90vh;
    /* border-right: 1px #27a82e solid; */
    display: flex;
    justify-content: left;
    align-items: center;


}

.left_menu {
    border-right: 1px #27a82e solid;
    border-top: 1px #27a82e solid;
    border-bottom: 1px #27a82e solid;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    overflow: hidden;
}

.content {
    width: 80vw;
    height: 90vh;
}

.menu_img {
    width: 30px;
}
</style>