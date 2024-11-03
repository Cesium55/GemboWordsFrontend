<script setup>

import Title from './Title.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import IconButton from './IconButton.vue';
import { whoami } from '@/utils/whoami';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

import { toggle_theme } from '@/utils/theme_manager';
import { LocalizationManager } from '@/utils/localization_manager';

const router = useRouter();


const theme = localStorage.getItem('theme') || 'light';
const isOpen = ref(false);

const user = ref(false)


// Функция для переключения видимости панели
const toggleDropdown = async () => {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
        if (!Cookies.get("jwt") && user.value) {
            user.value = false
        }
        if (Cookies.get("jwt") && !user.value) {
            const me = await whoami()

            if (me) {
                user.value = me
            }
        }
    }
};

// Функция для выхода из системы
const logout = () => {
    console.log('User logged out');
    Cookies.remove("jwt")
    user.value = false
    isOpen.value = false
    router.push('/login')
};

// Закрытие панели при клике вне её
const closeDropdown = (event) => {

    if (isOpen.value && !event.target.closest('.profile-dropdown')) {
        isOpen.value = false;
    }
};

onMounted(async () => {
    window.addEventListener('click', closeDropdown);

    if (Cookies.get("jwt")) {
        const me = await whoami()

        if (me) {
            user.value = me
        }
    }

});





// onBeforeUnmount(() => {
//     window.removeEventListener('click', closeDropdown);
// });

</script>


<template>
    <div class="header">
        <div class="header_cont">
            <Title></Title>


            <div class="header_management">
                <div class="management_item">
                    <button class="nav-button" @click="LocalizationManager.toggle_lang()">
                        <img class="management_icon" :src="'/icons/' + theme +'/lang.svg'" alt="Icon" />
                    </button>
                </div>

                <div class="management_item">
                    <button class="nav-button" @click="toggle_theme()">
                        <img class="management_icon" :src="'/icons/' + theme +'/theme.svg'" alt="Icon" />
                    </button>
                </div>

                <div class="management_item" @click.stop>


                    <button class="nav-button" @click="() => toggleDropdown()">
                        <img class="management_icon" :src="'/icons/' + theme +'/profile.svg'" alt="Icon" />
                    </button>
                    <div class="profile_panel" v-if="isOpen && user">
                        <div class="profile_panel_title">
                            {{ LocalizationManager.get_string("profile_popup_title") }}
                        </div>
                        <div class="profile_panel_line">
                            {{ user.email || 1 }}
                        </div>

                        <div class="profile_panel_logout">
                            <button @click="logout">
                                {{ LocalizationManager.get_string("logout") }}
                            </button>
                        </div>
                    </div>
                    <div class="profile_panel" v-if="isOpen && !user">
                        <div class="profile_panel_title">
                            {{ LocalizationManager.get_string("profile_unauth") }}
                        </div>
                        

                        <div class="profile_panel_logout">
                            <button @click="router.push('/login');isOpen=false">
                                {{ LocalizationManager.get_string("login_btn") }}
                            </button>
                        </div>
                        <div class="profile_panel_logout">
                            <button @click="router.push('/register');isOpen=false">
                                {{ LocalizationManager.get_string("reg_btn") }}
                            </button>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    </div>
</template>


<style scoped>

</style>