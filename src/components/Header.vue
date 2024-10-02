<script setup>

import Title from './Title.vue';

</script>


<template>
    <div class="header">
        <div class="header_cont">
            <Title></Title>

            <div class="header_management">
                <div class="management_item">
                    <img class="management_icon" src="@/assets/icons/dark/lang.svg" alt="Icon" />
                </div>

                <div class="management_item">
                    <img class="management_icon" src="@/assets/icons/dark/theme.svg" alt="Icon" />
                </div>

                <div class="management_item">
                    <img class="management_icon" src="@/assets/icons/dark/profile.svg" alt="Icon" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.header{
    height: 10vh;
    border-bottom: 1px #27a82e solid;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.header_cont{
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.header_management{
    display: flex;
    margin-right: 100px;

    justify-content: center; 
    align-items: center; 
}

.management_item{
    margin-left: 30px;

    display: flex;
    justify-content: center; 
    align-items: center; 

    padding: 5px;

    border-radius: 100%;

   height: 100%;

   aspect-ratio: 1 / 1;
}

.management_item:hover{
    background-color: rgb(20, 21, 25);
}

.management_icon{
    width: 70%;
    height: 70%;
}

</style>