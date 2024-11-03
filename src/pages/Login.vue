<script setup>
import { ref } from "vue"
import SubmitButton from "@/components/SubmitButton.vue";
import FormLine from "@/components/FormLine.vue";
import { FieldValidator } from "@/utils/validators"
import Link from "@/components/Link.vue"
import { useAuth } from "@/utils/login";
import { useRouter } from "vue-router";
import { LocalizationManager } from "@/utils/localization_manager";

const { login, isLoading, error } = useAuth();

const email_error = ref("")
const password_error = ref("")

const email = ref("")
const password = ref("")

const router = useRouter()

const server_error = ref("")



const email_validator = new FieldValidator(email, email_error)
const password_validator = new FieldValidator(password, password_error)

password_validator.newValidators([
  (value) => FieldValidator.min_length(8, value)
])

email_validator.newValidators([
  FieldValidator.isValidEmail
])





const handleLogin = async () => {

  email_validator.validate()
  password_validator.validate()

  if (email_validator.validate_status && password_validator.validate_status) {
    // localStorage.setItem('test_login', 'dota');

    const result = await login(email.value, password.value);

    if (result["status"]) {
      // Успешная авторизация, перенаправление или выполнение других действий
      console.log('Успешный вход', result);
      router.push({ name: 'Home' });
    }
    else {

      server_error.value = result["detail"]
      console.log('ne Успешный вход', result);
    }


  }


};


</script>
 
<template>

  <div class="out_center_cont">
    <div class="sign_cont">
      <h1 class="form_title">{{ LocalizationManager.get_string("login_title") }}</h1>
      <div class="server_error" v-if="server_error">
        {{ server_error }}
      </div>
      <div class="sign_form_cont">
        <form action="" method="get" @submit.prevent="handleLogin">

          <FormLine ident="email" type="email" :error=email_error @update="(v) => { email = v; email_validator.hide() }"
            @blur="() => email_validator.validate()">{{ LocalizationManager.get_string("Email") }}
          </FormLine>

          <FormLine ident="password" type="password" :error=password_error @blur="() => password_validator.validate()"
            @update="(v) => { password = v; password_validator.hide() }">{{ LocalizationManager.get_string("Pswd") }}
          </FormLine>

          <div class="form_element">
            <SubmitButton>
              {{ LocalizationManager.get_string("login_btn") }}
            </SubmitButton>
          </div>
          <p>
            {{ LocalizationManager.get_string("login_reg_ref") }} <span>
              <Link to="register">{{ LocalizationManager.get_string("here") }}</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
