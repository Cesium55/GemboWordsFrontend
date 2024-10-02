function speak(text){
    if (!text) return
    if ('speechSynthesis' in window) {
        // Создаем новый экземпляр для озвучивания текста
        const utterance = new SpeechSynthesisUtterance(text);
        // Устанавливаем язык (опционально)
        utterance.lang = 'en-US';
        // Запускаем озвучивание


        utterance.voice = window.speechSynthesis.getVoices()[0]

        window.speechSynthesis.speak(utterance);
      } else {
        alert('Ваш браузер не поддерживает Web Speech API');
      }
}

export default speak;