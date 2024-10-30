import { protocol, ip } from './addresses';
import Cookies from 'js-cookie';


const prefix = "api/"


const get_category = async (id) => {

    const response = await fetch(protocol + ip + prefix + `gembow/category/${id}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        } 
    });

    if (!response.ok) {
        // throw new Error(`HTTP error! Status: ${response.status}`);
        console.log(response.body)
        if (response.status == 401) {
            Cookies.remove("jwt")
        }
    }

    const data = await response.json();
    console.log(data);
    return data;
};

export { get_category }