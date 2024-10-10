<script setup>
import Title from '@/components/Title.vue';
import HomeCont from '@/components/HomeCont.vue';
import IconButton from '@/components/IconButton.vue';

import { ref, onMounted } from 'vue';
import speak from '@/utils/speak';
import { get_wotd } from '@/utils/fake_data';


const scrollContainer = ref(null)

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
                        Welcome to GEMBOWords
                    </div>
                    <div class="title mygreen">
                        Word of the day:
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
                                                <img src="@/assets/icons/dark/speak.svg" alt="say">
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
                                    {{ wotd.defenition }}
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
                                            <img src="@/assets/icons/dark/speak.svg" alt="say">
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
.home_panel {
    width: 60vw;
    height: 80vh;
    border: 1px #27a82e solid;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.homepage_cont {
    padding: 20px;
    height: 100%;
}

.title {
    font-size: 25px;
    margin-bottom: 15px;
    /* width: 50%; */
}

/* .word_of_the_day_cont {} */

.wotd_topline {
    display: flex;
    justify-content: left;
}

.avatar_cont img {
    max-height: 150px;
}

.word_titles_cont {
    display: flex;
    gap: 30px;
    margin-left: 100px;
}

/* .word_title_cont {} */

.word_title {
    font-size: 25px;
}

.transcription {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    color: rgb(200, 200, 200)
}

.defenition {
    color: rgb(220, 220, 220);
    margin-top: 20px;
    margin-left: 100px;
    font-size: 20px;
}

.example_titles {
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
    margin-top: 20px;
}


.examples {
    /* display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px; */

    max-height: 200px;
    overflow: auto; 

}
.example_pare{
    display: flex;
    justify-content: space-between;
    padding-right: 50px;
    padding-left: 50px;
}
.example_list_cont {
    width: 50%;
}

.example {

    display: flex;
    justify-content: left;
    align-items: center;

    flex: 1;


    padding-left: 10px;
    font-size: 20px;
    margin-top: 19px;
    color: #e0e0e0;
    overflow: auto;
}

.ex_title {
    font-size: 25px;
    color: #27a82e;
    width: 50%;
}

.videos_line{
    display: flex;
    margin-top: 20px;
    gap: 30px;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    padding-bottom: 10px;
}
.video_block{
    max-height: 300px;
}
.video_cont{
    height: 150px;
}

.video_cont video{
    height: 150px;
}
.video_description{
    text-align: center;
}

</style>