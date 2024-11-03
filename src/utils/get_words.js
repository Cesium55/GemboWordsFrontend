import { protocol, ip } from './addresses';


const prefix = "api/gembow/"


const get_new_words = async () => await get_words("get_new_words");
const get_words_to_repeat = async () => await get_words("repeat/time_limited")

const get_words = async (url) => {
    const response = await fetch(protocol + ip + prefix + url, {
        method: 'GET',
        credentials: 'include' // Включаем куки в запрос
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
    return data;
};

export { get_new_words, get_words_to_repeat }