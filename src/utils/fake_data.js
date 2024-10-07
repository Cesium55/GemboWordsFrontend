

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

export { get_words, get_categories }