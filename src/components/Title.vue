<script setup>
import Link from './Link.vue';

</script>

<template>

<div id="main_title">
    <slot><Link to="/">GEMBOWords</Link></slot>
</div>

</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

#main_title{
    font-family: "Lilita One", sans-serif;
    font-weight: 400;
    font-style: normal;
    user-select: none;
    font-size: 40px;
    color: #27a82e;
}


</style>