<script setup>
// import { defineProps } from 'vue';

const props = defineProps({
    to: String
})
</script>

<template>
    <router-link class="link" :to="to"><slot>link</slot></router-link>
</template>

<style scoped>


</style>