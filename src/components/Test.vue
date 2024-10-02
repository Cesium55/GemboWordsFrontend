<template>
  <div>
    <h1>Озвучить текст</h1>
    <textarea v-model="text" placeholder="Введите текст для озвучивания"></textarea>

    <label for="voices">Выберите голос:</label>
    <select v-model="selectedVoice" id="voices">
      <option v-for="voice in voices" :key="voice.name" :value="voice">{{ voice.name }} ({{ voice.lang }})</option>
    </select>

    <label for="rate">Скорость:</label>
    <input type="range" v-model="rate" min="0.5" max="2" step="0.1" />

    <label for="pitch">Высота тона:</label>
    <input type="range" v-model="pitch" min="0" max="2" step="0.1" />

    <label for="volume">Громкость:</label>
    <input type="range" v-model="volume" min="0" max="1" step="0.1" />

    <button @click="speakText">Озвучить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '', // Текст для озвучивания
      voices: [], // Список доступных голосов
      selectedVoice: null, // Выбранный голос
      rate: 1, // Скорость речи
      pitch: 1, // Высота тона
      volume: 1 // Громкость
    };
  },
  mounted() {
    this.getVoices(); // Загружаем голоса при монтировании компонента
    window.speechSynthesis.onvoiceschanged = this.getVoices; // Обновляем список, когда голоса загружены
  },
  methods: {
    getVoices() {
      this.voices = window.speechSynthesis.getVoices();
      if (this.voices.length > 0) {
        this.selectedVoice = this.voices[0]; // Выбираем первый голос по умолчанию
      }
    },
    speakText() {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(this.text);

        // Настройка параметров озвучивания
        utterance.voice = this.selectedVoice;
        utterance.rate = this.rate; // Устанавливаем скорость
        utterance.pitch = this.pitch; // Устанавливаем высоту тона
        utterance.volume = this.volume; // Устанавливаем громкость

        // Запускаем озвучивание
        window.speechSynthesis.speak(utterance);
      } else {
        alert('Ваш браузер не поддерживает Web Speech API');
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
}
label {
  display: block;
  margin-top: 10px;
}
input[type="range"] {
  width: 100%;
  margin-bottom: 10px;
}
</style>
