<script setup>
import { ref, computed, onMounted } from 'vue';
import Link from './Link.vue';

const props = defineProps({
    active: Boolean,
    text: String,
    to: String
});


const classname = computed(() => (props.active ? 'menu_item active' : 'menu_item'));
</script>

<template>

    <Link :to="to">
    <div :class="classname">
        <div class="img_cont">
            <slot>
                icon
            </slot>
        </div>

        <div class="text_cont">
            {{ text }}
        </div>
    </div>
    </Link>

</template>



<style scoped>
.menu_item {
    padding: 20px;
    display: flex;
    width: 100%;
    box-sizing: border-box;

    /* border-bottom: 1px #27a82e solid; */
}


.text_cont {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 20px;

}

.menu_item:hover {
    background-color: rgb(20, 21, 25);
}

.active {
    background-color: rgb(25, 26, 31);
}
.active:hover {
    background-color: rgb(25, 26, 31);
}

</style>