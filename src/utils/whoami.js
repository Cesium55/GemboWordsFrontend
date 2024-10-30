import { protocol, ip } from './addresses';
import Cookies from 'js-cookie';


const prefix = "api/"


const whoami = async () => {

    const endpoint = "auth/whoami/"

    // const response = await fetch(protocol + ip + prefix + endpoint, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       "credentials": 'include'
    //     },
    //     body: JSON.stringify({"id": id})
    //   });


    const response = await fetch(protocol + ip + prefix + endpoint, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json' 
        } 
    });

    if (!response.ok) {
        console.log(response.body)
        if (response.status == 401) {
            Cookies.remove("jwt")
        }
        return
    }

    const data = await response.json();
    return data;
};

export { whoami }