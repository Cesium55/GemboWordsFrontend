import { protocol, ip } from './addresses';
import Cookies from 'js-cookie';


const prefix = "api/"


const select_categories = async (id, status) => {

    const endpoint = status ? "gembow/select_category" : "gembow/unselect_category"

    // const response = await fetch(protocol + ip + prefix + endpoint, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "credentials": 'include'
    //     },
    //     body: JSON.stringify({"id": id})
    //   });


    const response = await fetch(protocol + ip + prefix + endpoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' // Указание на то, что отправляем JSON
        },
        body: JSON.stringify({ "id": id }) // Тело запроса должно быть здесь
    });

    // Проверяем, успешен ли запрос
    if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
        console.log(response.body)
        if (response.status == 401) {
            Cookies.remove("jwt")
        }
    }

    // Преобразуем ответ в JSON и возвращаем данные
    const data = await response.json();
    console.log(data);
    return data;
};

export { select_categories }