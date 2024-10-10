

const get_words = () => {
    return [
        {
            "id": 1,
            "russian": "кошка",
            "english": "cat",
            "transcription": "kæt",
            "categories": [
                {
                    "id": 1,
                    "name": "Животные",
                    "picture": null,
                    "owner_id": 101
                }
            ],
            "examples": [
                {
                    "id": 1,
                    "english": "The cat is sleeping on the bed.",
                    "russian": "Кошка спит на кровати."
                },
                {
                    "id": 2,
                    "english": "I have a black cat.",
                    "russian": "У меня есть чёрная кошка."
                }
            ]
        },
        {
            "id": 2,
            "russian": "собака",
            "english": "dog",
            "transcription": "dɔg",
            "categories": [
                {
                    "id": 1,
                    "name": "Животные",
                    "picture": null,
                    "owner_id": 101
                }
            ],
            "examples": [
                {
                    "id": 3,
                    "english": "The dog is barking loudly.",
                    "russian": "Собака громко лает."
                },
                {
                    "id": 4,
                    "english": "He took his dog for a walk.",
                    "russian": "Он вывел свою собаку на прогулку."
                }
            ]
        },
        {
            "id": 3,
            "russian": "яблоко",
            "english": "apple",
            "transcription": "'æpl",
            "categories": [
                {
                    "id": 2,
                    "name": "Фрукты",
                    "picture": null,
                    "owner_id": 102
                }
            ],
            "examples": [
                {
                    "id": 5,
                    "english": "She is eating an apple.",
                    "russian": "Она ест яблоко."
                },
                {
                    "id": 6,
                    "english": "The apple is red and juicy.",
                    "russian": "Яблоко красное и сочное."
                }
            ]
        },
        {
            "id": 4,
            "russian": "стол",
            "english": "table",
            "transcription": "'teɪbl",
            "categories": [
                {
                    "id": 3,
                    "name": "Мебель",
                    "picture": null,
                    "owner_id": 103
                }
            ],
            "examples": [
                {
                    "id": 7,
                    "english": "The book is on the table.",
                    "russian": "Книга на столе."
                },
                {
                    "id": 8,
                    "english": "We bought a new table for the kitchen.",
                    "russian": "Мы купили новый стол для кухни."
                }
            ]
        },
        {
            "id": 5,
            "russian": "машина",
            "english": "car",
            "transcription": "kɑr",
            "categories": [
                {
                    "id": 4,
                    "name": "Транспорт",
                    "picture": null,
                    "owner_id": 104
                }
            ],
            "examples": [
                {
                    "id": 9,
                    "english": "I drive my car to work every day.",
                    "russian": "Я езжу на машине на работу каждый день."
                },
                {
                    "id": 10,
                    "english": "The car is parked in the garage.",
                    "russian": "Машина припаркована в гараже."
                }
            ]
        },
        {
            "id": 6,
            "russian": "велосипед",
            "english": "bicycle",
            "transcription": "'baɪsɪkl",
            "categories": [
                {
                    "id": 4,
                    "name": "Транспорт",
                    "picture": null,
                    "owner_id": 104
                }
            ],
            "examples": [
                {
                    "id": 11,
                    "english": "He rides his bicycle every morning.",
                    "russian": "Он катается на велосипеде каждое утро."
                },
                {
                    "id": 12,
                    "english": "My bicycle is old but still works well.",
                    "russian": "Мой велосипед старый, но все еще хорошо работает."
                }
            ]
        },
        {
            "id": 7,
            "russian": "книга",
            "english": "book",
            "transcription": "bʊk",
            "categories": [
                {
                    "id": 5,
                    "name": "Предметы",
                    "picture": null,
                    "owner_id": 105
                }
            ],
            "examples": [
                {
                    "id": 13,
                    "english": "She is reading a book.",
                    "russian": "Она читает книгу."
                },
                {
                    "id": 14,
                    "english": "This book is very interesting.",
                    "russian": "Эта книга очень интересная."
                }
            ]
        },
        {
            "id": 8,
            "russian": "стул",
            "english": "chair",
            "transcription": "ʧɛr",
            "categories": [

                {
                    "id": 5,
                    "name": "Предметы",
                    "picture": null,
                    "owner_id": 105
                },

                {
                    
                    "id": 3,
                    "name": "Мебель",
                    "picture": null,
                    "owner_id": 103
                }
            ],
            "examples": [
                {
                    "id": 15,
                    "english": "The chair is comfortable.",
                    "russian": "Стул удобный."
                },
                {
                    "id": 16,
                    "english": "He sat on the chair next to the window.",
                    "russian": "Он сел на стул у окна."
                }
            ]
        },
        {
            "id": 9,
            "russian": "ручка",
            "english": "pen",
            "transcription": "pɛn",
            "categories": [
                {
                    "id": 5,
                    "name": "Предметы",
                    "picture": null,
                    "owner_id": 105
                }
            ],
            "examples": [
                {
                    "id": 17,
                    "english": "I need a pen to write this down.",
                    "russian": "Мне нужна ручка, чтобы записать это."
                },
                {
                    "id": 18,
                    "english": "The pen is out of ink.",
                    "russian": "В ручке закончились чернила."
                }
            ]
        },
        {
            "id": 10,
            "russian": "лампа",
            "english": "lamp",
            "transcription": "læmp",
            "categories": [
                {
                    "id": 3,
                    "name": "Мебель",
                    "picture": null,
                    "owner_id": 103
                }
            ],
            "examples": [
                {
                    "id": 19,
                    "english": "The lamp is on the desk.",
                    "russian": "Лампа стоит на столе."
                },
                {
                    "id": 20,
                    "english": "Turn off the lamp before you go to bed.",
                    "russian": "Выключи лампу перед тем, как ляжешь спать."
                }
            ]
        }
    ]
}



const get_categories = () => {
    return [
        {
            "id": 1,
            "name": "Животные",
            "picture": null,
            "owner_id": null,
            "words": [
                {
                    "id": 1,
                    "russian": "кошка",
                    "english": "cat",
                    "transcription": "kæt"
                },
                {
                    "id": 2,
                    "russian": "собака",
                    "english": "dog",
                    "transcription": "dɔg"
                }
            ]
        },
        {
            "id": 2,
            "name": "Фрукты",
            "picture": null,
            "owner_id": null,
            "words": [
                {
                    "id": 3,
                    "russian": "яблоко",
                    "english": "apple",
                    "transcription": "'æpl"
                }
            ]
        },
        {
            "id": 3,
            "name": "Мебель",
            "picture": null,
            "owner_id": null,
            "words": [
                {
                    "id": 4,
                    "russian": "стол",
                    "english": "table",
                    "transcription": "'teɪbl"
                },
                {
                    "id": 8,
                    "russian": "стул",
                    "english": "chair",
                    "transcription": "ʧɛr"
                },
                {
                    "id": 10,
                    "russian": "лампа",
                    "english": "lamp",
                    "transcription": "læmp"
                }
            ]
        },
        {
            "id": 4,
            "name": "Транспорт",
            "picture": null,
            "owner_id": null,
            "words": [
                {
                    "id": 5,
                    "russian": "машина",
                    "english": "car",
                    "transcription": "kɑr"
                },
                {
                    "id": 6,
                    "russian": "велосипед",
                    "english": "bicycle",
                    "transcription": "'baɪsɪkl"
                }
            ]
        },
        {
            "id": 5,
            "name": "Предметы",
            "picture": null,
            "owner_id": 105,
            "words": [
                {
                    "id": 7,
                    "russian": "книга",
                    "english": "book",
                    "transcription": "bʊk"
                },
                {
                    "id": 9,
                    "russian": "ручка",
                    "english": "pen",
                    "transcription": "pɛn"
                }
            ]
        }
    ]
    
}


const get_wotd = (number = 0) => {
    const words = [
        {
            english: "To defenestrate",
            russian: "Выбросить из окна",
            transcription: "[dɪˈfɛnɪstreɪt]",
            defenition: "Act of throwing someone out of a window.",
            examples: [
                { russian: "Он был выброшен из окна.", english: "He was defenestrated." },
                { russian: "Это старый способ решения споров.", english: "It’s an old way of settling disputes." }
            ],
            photo: null,
            videos: [
                { url: null, description: "История дефенестрации в политике." },
                { url: null, description: "Как часто используется слово 'defenestrate'?" }
            ]
        },
        {
            english: "Flabbergasted",
            russian: "Ошеломленный",
            transcription: "ˈflæbəɡɑːstɪd",
            defenition: "feeling shocked, usually because of something you were not expecting",
            examples: [
                { russian: "Я был ошеломлен его поведением.", english: "I was flabbergasted by his behavior." },
                { russian: "Она была ошеломлена новостями.", english: "She was flabbergasted by the news." },
                { russian: "Когда они объявили ее имя, победительница просто сидела, ошеломленная.", english: "When they announced her name, the winner just sat there, flabbergasted." },
            ],
            photo: "/pictures/Flab.webp",
            videos: [
                { url: "/videos/flabbergasted/0.mp4", description: "You, on the other hand, continue to be flabbergasted every time someone actually acts like a human being." },
                { url: "/videos/flabbergasted/1.mp4", description: "Flabbergasted that motherfucker." },
                { url: "/videos/flabbergasted/2.mp4", description: "Not flabbergasted." },
                { url: "/videos/flabbergasted/3.mp4", description: "I was flabbergasted, sir." },
                { url: "/videos/flabbergasted/4.mp4", description: "No, no, no, I'm not flabbergasted. " }
            ]
        },
        {
            english: "Jubilant",
            russian: "Ликующий",
            transcription: "[ˈdʒuːbɪlənt]",
            defenition: "Feeling or expressing great joy.",
            examples: [
                { russian: "Толпа была ликующей.", english: "The crowd was jubilant." },
                { russian: "Он был в ликующем настроении после победы.", english: "He was jubilant after the victory." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что значит быть 'jubilant'?" },
                { url: null, description: "Ликующие моменты в истории." }
            ]
        },
        {
            english: "Tachyon",
            russian: "Тахион",
            transcription: "[ˈtækiɒn]",
            defenition: "A hypothetical particle that travels faster than light.",
            examples: [
                { russian: "Тахионы могут двигаться быстрее света.", english: "Tachyons can move faster than light." },
                { russian: "Тахионы — часть теории физики.", english: "Tachyons are part of physics theory." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что такое тахионы?" },
                { url: null, description: "Мифы и реальность тахионов." }
            ]
        },
        {
            english: "Heisenbug",
            russian: "Гейзенбаг",
            transcription: "[ˈhaɪzənbʌɡ]",
            defenition: "A software bug that seems to change its behavior when one attempts to study it.",
            examples: [
                { russian: "Это классический гейзенбаг, трудно отследить.", english: "It's a classic Heisenbug, hard to trace." },
                { russian: "Гейзенбаг исчезает при отладке.", english: "The Heisenbug vanishes when debugging." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что такое гейзенбаг?" },
                { url: null, description: "Причины появления гейзенбагов в программировании." }
            ]
        },
        {
            english: "Glamping",
            russian: "Глэмпинг",
            transcription: "[ˈɡlæmpɪŋ]",
            defenition: "Luxury camping with amenities and comfort.",
            examples: [
                { russian: "Мы отправились на глэмпинг в горы.", english: "We went glamping in the mountains." },
                { russian: "Глэмпинг стал популярным среди туристов.", english: "Glamping has become popular among tourists." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что такое глэмпинг?" },
                { url: null, description: "Разница между глэмпингом и обычным кемпингом." }
            ]
        },
        {
            english: "Quixotic",
            russian: "Идеалистический",
            transcription: "[kwɪkˈsɒtɪk]",
            defenition: "Exceedingly idealistic; unrealistic and impractical.",
            examples: [
                { russian: "Его план был слишком идеалистическим.", english: "His plan was too quixotic." },
                { russian: "Он имел идеалистические представления о мире.", english: "He had quixotic views about the world." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что значит 'quixotic'?" },
                { url: null, description: "Идеализм против реальности: quixotic подход." }
            ]
        },
        {
            english: "Zeitgeist",
            russian: "Дух времени",
            transcription: "[ˈzaɪtɡaɪst]",
            defenition: "The defining spirit or mood of a particular period of history.",
            examples: [
                { russian: "Этот фильм уловил дух времени.", english: "This movie captured the zeitgeist." },
                { russian: "Книга прекрасно отражает дух времени 60-х.", english: "The book reflects the zeitgeist of the 60s." }
            ],
            photo: null,
            videos: [
                { url: null, description: "Что такое zeitgeist?" },
                { url: null, description: "Как дух времени влияет на культуру?" }
            ]
        },
        {
            english: "Luddite",
            russian: "Луддит",
            transcription: "[ˈlʌdaɪt]",
            defenition: "A person opposed to new technology or ways of working.",
            examples: [
                { russian: "Он был луддитом и ненавидел технологические изменения.", english: "He was a luddite and hated technological changes." },
                { russian: "Луддиты выступали против индустриализации.", english: "The Luddites opposed industrialization." }
            ],
            photo: null,
            videos: [
                { url: null, description: "История луддитов." },
                { url: null, description: "Современные луддиты и их взгляды на технологии." }
            ]
        }
    ];


    return words[number % words.length]
}

/*
{
    english: String,
    russian: String,
    transcription: String,
    defenition: String,
    examples: Array<Example>, // Example : {russian: String, english: string}
    photo: String, // url
    videos: Array<Video>, // Video: {url: string, description: string}
}
*/


export { get_words, get_categories, get_wotd }