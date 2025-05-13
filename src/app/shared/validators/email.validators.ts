import { AbstractControl, ValidationErrors } from "@angular/forms";

export class EmailValidator{
    static emailVal(control: AbstractControl): ValidationErrors | null {
        if (control.value?.includes('gmail')) {
            return { emailVal: true }
        }
        return null
    }
}