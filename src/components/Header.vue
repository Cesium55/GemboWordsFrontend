<script setup>

import Title from './Title.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import IconButton from './IconButton.vue';
import { whoami } from '@/utils/whoami';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

const router = useRouter();



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
                    <button class="nav-button">
                        <img class="management_icon" src="@/assets/icons/dark/lang.svg" alt="Icon" />
                    </button>
                </div>

                <div class="management_item">
                    <button class="nav-button">
                        <img class="management_icon" src="@/assets/icons/dark/theme.svg" alt="Icon" />
                    </button>
                </div>

                <div class="management_item" @click.stop>


                    <button class="nav-button" @click="() => toggleDropdown()">
                        <img class="management_icon" src="@/assets/icons/dark/profile.svg" alt="Icon" />
                    </button>
                    <div class="profile_panel" v-if="isOpen && user">
                        <div class="profile_panel_title">
                            Profile
                        </div>
                        <div class="profile_panel_line">
                            {{ user.email || 1 }}
                        </div>

                        <div class="profile_panel_logout">
                            <button @click="logout">
                                Log out
                            </button>
                        </div>
                    </div>
                    <div class="profile_panel" v-if="isOpen && !user">
                        <div class="profile_panel_title">
                            You are not logged in
                        </div>
                        

                        <div class="profile_panel_logout">
                            <button @click="router.push('/login');isOpen=false">
                                Login
                            </button>
                        </div>
                        <div class="profile_panel_logout">
                            <button @click="router.push('/register');isOpen=false">
                                Register
                            </button>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    </div>
</template>


<style scoped>
.header {
    height: 10vh;
    border-bottom: 1px #27a82e solid;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.header_cont {
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

.header_management {
    display: flex;
    margin-right: 100px;

    justify-content: center;
    align-items: center;
}

.management_item {
    margin-left: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

    border-radius: 100%;

    height: 100%;

    aspect-ratio: 1 / 1;
}

.management_item:hover {
    background-color: rgb(20, 21, 25);
}

.management_icon {
    width: 100%;
    height: 100%;
}

.nav-button {
    border: none;
    background-color: inherit;
    width: 100%;
    height: 100%;
    border-radius: 100%;
}

.profile_panel {
    position: fixed;
    /* Элемент с фиксированным позиционированием */
    top: 80px;
    /* Отступ от верхней границы окна браузера */
    /* right: 20px; */
    /* Отступ от правой границы окна браузера */
    background-color: rgb(20, 21, 25);
    border: 1px #27a82e solid;
    /* padding: 10px; */
    border-radius: 10px;
}

.profile_panel_title {
    text-align: center;
    padding: 10px;
    border-bottom: 1px #27a82e solid;
}

.profile_panel_line {
    text-align: center;
    padding: 10px;
    /* border-bottom: 1px #27a82e solid; */
}

.profile_panel_logout {
    display: flex;
    justify-content: space-around;
    padding: 10px;
}

.profile_panel_logout button {
    background-color: #27a82e;
    color: white;
    border: none;
    border-radius: 100px;
    font-size: 20px;
    padding: 5px 10px;
}
</style>