<script setup>

import { ref, defineProps } from 'vue';

const props = defineProps({
    ident: String,
    error: String,
    type: String,
})
const emit = defineEmits(["update"])

</script>

<template>
    <div class="form_line">
        <div class="form_element">
            <label class="form_label" :for="ident"><slot>Input</slot></label>
            <input class="form_input" v-bind="$attrs" :id="ident" :type="type" :name="ident"  @input="(e) => emit('update', e.target.value)">
        </div>
        <div  class="error_view">
            <span v-if="error">
              {{ error }}
            </span>
        </div>
    </div>
</template>


<style scoped>


</style>