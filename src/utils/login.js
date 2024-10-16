// src/composables/useAuth.js
import { ref } from 'vue';
import Cookies from 'js-cookie';

import { protocol, ip } from './addresses';

export function useAuth() {
  const isLoading = ref(false);
  const error = ref(null);

  const login = async (email, password) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(protocol + ip + "api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": email, "password": password }),
      });

      if (!response.ok) {
        // console.log("not ok response")
        const data = await response.json();
        data["status"] = false
        // console.log(data)
        return data
      }

      const data = await response.json();
      data["status"] = true

      // Сохранение JWT в куки
      Cookies.set('jwt', data.token, { expires: 300 }); 

      isLoading.value = false;
      return data;
    } catch (err) {
      error.value = err.message;
      isLoading.value = false;
      return null;
    }
  };

  return { login, isLoading, error };
}