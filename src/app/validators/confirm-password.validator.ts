import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => 
{
    // if passwords are matched return null (else) return error PasswordNotMatch
  return control.value.password === control.value.confirm ? null : { NoMatch: true };
};


export const spaceCheckValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => 
{
    //console.log(control.value.includes(' '));
    // if there is a space in string
  return control.value.includes(' ') ? { spaced: true } : null ;
};
