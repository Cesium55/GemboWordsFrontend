import { protocol, ip } from './addresses';


const prefix = "api/"


const get_stats = async () => {
    const response = await fetch(protocol + ip + prefix + "stats/", {
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

export { get_stats }