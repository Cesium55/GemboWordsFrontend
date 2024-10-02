<script setup>
import {ref} from "vue"
import router from "./router/router";
import Title from "./components/Title.vue";
import Header from "./components/Header.vue";

const count = ref(0)
</script>

<template>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>|
    <router-link to="/register">Register</router-link>|
  </nav>  -->

  <Header></Header>
  <router-view></router-view>

</template>


