class ValidationManager {
    constructor() {
        this.validations = []
    }

    newValidation(field) { // FieldValidator, List[func]
        this.validations.push(field)
    }

    validate() {
        for (let i = 0; i < this.validations.length; i++) {
            const field = this.validations[i]
            const errors = []
            console.log(field)
            for (let j = 0; j < field.validators.length; j++) {
                const validator = field.validators[i]
                const error = validator(field.field_ref.value)
                console.log("error: " + error)
                if (error) errors.push(error)
            }
            // console.log(errors)
            field.setErrors(errors)
        }
    }




}

class FieldValidator {
    constructor(field_ref, error_ref) {
        this.field_ref = field_ref
        this.error_ref = error_ref
        this.errors = [] // List[string]
        this.validate_status = true
        this.validators = []
    }

    setErrors(errors) {
        this.errors = errors
        this.validate_status = errors.length > 0
        if (this.validate_status) {
            this.error_ref.value = this.errors.join("; ")
        }
        else {
            this.error_ref.value = ""
        }
    }

    newValidators(validators) { // List[func]
        this.validators = validators
    }

    validate(){
        const errors = []
        for (let j = 0; j < this.validators.length; j++) {
            const validator = this.validators[j]
            const error = validator(this.field_ref.value)
            if (error) errors.push(error)
        }
        // console.log(errors)
        this.setErrors(errors)
    }

    hide(){
        this.error_ref.value = ""
    }


    static min_length(ml, str) {
        // console.log("ml: " + ml + " str: '" + str + "'")
        if (str.length < ml) return "Length must be at least " + ml + " characters."
    }

    static max_length(ml, str) {
        // console.log("ml: " + ml + " str: '" + str + "'")
        if (str.length > ml) return "Length must be maximum " + ml + " characters."
    }

    static isValidEmail(email) {
        // Регулярное выражение для проверки email
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Проверяем строку с использованием регулярного выражения
        const isEmail = emailRegex.test(email);

        if (!isEmail) return "You must enter valid email"
    }

    static equalPassword(original_reference, second_value){
        if (original_reference.value != second_value) return "Passwords are not equal"
    }

}



export { FieldValidator, ValidationManager }