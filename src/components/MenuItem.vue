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

</style>