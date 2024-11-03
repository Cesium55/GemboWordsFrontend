import { protocol, ip } from './addresses';


const prefix = "api/gembow/"




const do_action_with_word = async (url, id) => {
    const response = await fetch(protocol + ip + prefix + url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ "id": id })
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

const next_repeat = async () => {
    const response = await fetch(protocol + ip + prefix + "earliest_repeat", {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        }
    });

    if (!response.ok) {
        console.log("request error")
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); 
    return data;
}



const already_know = async (id) => await do_action_with_word("already_know", id);
const start_learning = async (id) => await do_action_with_word("start_learn_word", id);
const repeat_word = async (id) => await do_action_with_word("repeat", id);
const forget_word = async (id) => await do_action_with_word("forget", id);

export { already_know, start_learning, repeat_word, forget_word, next_repeat }