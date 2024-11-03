<script setup>
import Title from '@/components/Title.vue';
import HomeCont from '@/components/HomeCont.vue';
import IconButton from '@/components/IconButton.vue';

import { ref, onMounted } from 'vue';
import speak from '@/utils/speak';
import { get_wotd } from '@/utils/fake_data';
import { LocalizationManager } from '@/utils/localization_manager';


const scrollContainer = ref(null)
const theme = localStorage.getItem('theme') || 'light';
const onScroll = (event) => {
  // Отменяем вертикальную прокрутку
  event.preventDefault();

  // Прокручиваем контейнер по горизонтали на величину вертикального движения
  if (scrollContainer.value) {
    scrollContainer.value.scrollLeft += event.deltaY; // Преобразуем deltaY в горизонтальное смещение
  }
}

onMounted(() => {
  if (scrollContainer.value) {
    // Добавляем обработчик wheel события на контейнер
    scrollContainer.value.addEventListener('wheel', onScroll);
  }
})

const wotd = ref(get_wotd(1))


</script>

<template>

    <HomeCont home_active>

        <div class="learn_screen">
            <div class="home_panel">
                <div class="homepage_cont">
                    <div class="title">
                        {{ LocalizationManager.get_string("home_welcome") }}
                    </div>
                    <div class="title mygreen">
                        {{ LocalizationManager.get_string("home_wotd") }}:
                    </div>

                    <div class="word_of_the_day_cont">
                        <div class="wotd_topline">


                            <div class="avatar_cont">
                                <img :src="wotd.photo" alt="">
                            </div>

                            <div class="topline_right">
                                <div class="word_titles_cont">
                                    <div class="word_title_cont">
                                        <div class="word_title">
                                            {{ wotd.english }}
                                        </div>

                                        <div class="transcription">
                                            <div>[ {{ wotd.transcription }} ]</div>
                                            <IconButton @click="speak(wotd.english)">
                                                <img :src="'/icons/' + theme +'/speak.svg'" alt="say">
                                            </IconButton>
                                        </div>
                                    </div>

                                    <div class="word_title_cont"></div>

                                    <div class="word_title_cont">
                                        <div class="word_title">
                                            <!-- {{ wotd.russian }} -->
                                        </div>
                                    </div>
                                </div>

                                <div class="defenition">
                                    - {{ wotd.defenition }}
                                </div>
                            </div>

                        </div>



                        <div class="wotd_examples_line">
                            <!-- <div class="example_titles">
                                <div class="ex_title">Examples</div>
                                <div class="ex_title">Примеры</div>

                            </div> -->


                            <div class="examples">
                                <div class="example_pare" v-for="(ex, index) in wotd.examples">

                                    <div class="example">
                                        <IconButton @click="speak(ex.english)">
                                            <img :src="'/icons/' + theme +'/speak.svg'" alt="say">
                                        </IconButton>
                                        <div class="example_text">
                                            {{ index + 1 }}) {{ ex.english }}
                                        </div>
                                    </div>

                                    <div class="example">
                                        {{ index + 1 }}) {{ ex.russian }}
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="videos_line" ref="scrollContainer">
                            <div class="video_block" v-for="(video, ex) in wotd.videos">
                                <div class="video_cont">
                                    <video :src="video.url" controls></video>
                                </div>
                                <div class="video_description">
                                    {{ video.description }}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    </HomeCont>

</template>


<style scoped>


</style>