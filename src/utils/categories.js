import { protocol, ip } from './addresses';


const prefix = "api/"


const get_categories = async () => {
    const response = await fetch(protocol + ip + prefix + "gembow/get_categories", {
        method: 'GET',
        credentials: 'include' // Включаем куки в запрос
    });

    // Проверяем, успешен ли запрос
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Преобразуем ответ в JSON и возвращаем данные
    const data = await response.json();
    console.log(data); // Выводим полученные данные в консоль
    return data; // Возвращаем данные
};


const create_category = async (name) => {
    const response = await fetch(protocol + ip + prefix + "gembow/create_category", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ "name": name })
    });



    if (!response.ok) {
        if (response.status==429){
            const errorData = await response.json();
            return {
                is_error: true,
                detail: errorData.detail
            }
        }
        else{
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }

    const data = await response.json();
    console.log(data);
    window.location.reload(true)
    return data;
};



const add_word = async (word) => {
    const response = await fetch(protocol + ip + prefix + "gembow/add_word", {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(word)
    });



    if (!response.ok) {
        if (response.status==429){
            const errorData = await response.json();
            return {
                is_error: true,
                detail: errorData.detail
            }
        }
        else{
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }

    const data = await response.json();
    console.log(data);
    window.location.href = "/category/" + word.category_id
    return data;
};



const delete_word = async (id) => {
    const response = await fetch(protocol + ip + prefix + "gembow/word", {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({"id": id})
    });



    if (!response.ok) {
        if (response.status==429){
            const errorData = await response.json();
            return {
                is_error: true,
                detail: errorData.detail
            }
        }
        else{
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    }

    const data = await response.json();
    console.log(data);
    window.location.reload()
    return data;
};

export { get_categories, create_category, add_word, delete_word }