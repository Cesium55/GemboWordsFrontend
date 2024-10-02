<script setup>
import { ref } from "vue"
import SubmitButton from "@/components/SubmitButton.vue";
import FormLine from "@/components/FormLine.vue";
import { FieldValidator } from "@/utils/validators"
import Link from "@/components/Link.vue"



const email_error = ref("")
const password_error = ref("")

const email = ref("")
const password = ref("")



const email_validator = new FieldValidator(email, email_error)
const password_validator = new FieldValidator(password, password_error)

password_validator.newValidators([
  (value) => FieldValidator.min_length(8, value)
])

email_validator.newValidators([
  FieldValidator.isValidEmail
])



</script>

<template>

  <div class="out_center_cont">
    <div class="sign_cont">
      <h1 class="form_title">Sign in</h1>
      <div class="sign_form_cont">
        <form action="" method="get">

          <FormLine ident="email" type="email" :error=email_error @update="(v) => { email = v; email_validator.hide() }"
            @blur="() => email_validator.validate()">Email
          </FormLine>

          <FormLine ident="password" type="password" :error=password_error @blur="() => password_validator.validate()"
            @update="(v) => { password = v; password_validator.hide() }">Password
          </FormLine>

          <div class="form_element">
            <SubmitButton >
              Log in
            </SubmitButton>
          </div>
          <p>
            Do not have an account yet? You can sign up <span> <Link to="register">here</Link> </span>
          </p>
        </form>
      </div>
    </div>
  </div>

</template>

<style scoped>
.out_center_cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.sign_cont {
  border: 2px #27a82e solid;
  padding: 20px 50px;
  border-radius: 10px;
  min-width: 25vh;
}


.form_title {
  text-align: center;
}

.form_element {
  margin-bottom: 2vh;
  display: flex;
  justify-content: space-between;

}

.form_label {
  margin-right: 2px;
}

.error_view {
  color: red;
}
</style>
