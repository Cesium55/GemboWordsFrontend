<script setup>
import HomeCont from '@/components/HomeCont.vue';

const props = defineProps({
    known_words: {
        type: Number,
        default: 0
    },
    learning_words: {
        type: Number,
        default: 0
    },
    learned_words: {
        type: Number,
        default: 0
    },
    problematic_words: {
        type: Number,
        default: 0
    }
})





</script>


<template>
    <HomeCont stats_active>


        <div class="stats_screen">

            <div class="stats_cont">

                <div class="part_title">
                    Statistics
                </div>

                <div class="stats_list">



                    <div class="stats_line">
                        <div class="stat_name known">Known words</div>
                        <div class="stat_value">{{ known_words }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name learned">Learned words</div>
                        <div class="stat_value">{{ learned_words }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name learning">Repeating words</div>
                        <div class="stat_value">{{ learning_words }}</div>
                    </div>

                    <div class="stats_line">
                        <div class="stat_name problematic">Problematic words</div>
                        <div class="stat_value">{{ problematic_words }}</div>
                    </div>
                </div>
            </div>

        </div>
    </HomeCont>
</template>


<style scoped>
.stats_screen {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.stats_cont {
    width: 400px;
    height: 30%;
    border: 1px #27a82e solid;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: top;

    overflow: auto;
    padding: 30px;
    gap: 20px;
}


.stats_list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    flex-grow: 1;
}

.stats_line {
    font-size: 25px;
    display: flex;
    justify-content: space-between;
}

.part_title {
    font-size: 30px;
    color: #27a82e;
}


.stats_line {
    position: relative;
    padding-left: 30px;
    /* Отступ для квадратика */
}

.stat_name::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    /* Центрируем по вертикали */
    width: 20px;
    /* Размер квадрата */
    height: 20px;
    /* Размер квадрата */
}

.known::before {
    background-color: #F7C815;
}

.learning::before {
    background-color: #27a82e;
}

.learned::before {
    background-color: #3498db;
}

.problematic::before {
    background-color: #c10000;
}
</style>