<script setup>
const emits=defineEmits(["click"])
</script>


<template>


        <button class="icon_btn" @click="$emit('click')">
            <slot>ICON</slot>
        </button>


</template>


<style scoped>
.icon_btn {
    border: none;
    border-radius: 100%;
    padding: 5px;


   /* height: 100%; */

   aspect-ratio: 1 / 1;

   background-color: inherit;
}
.icon_btn:hover {
    background-color: rgb(20, 21, 25);
}

</style>