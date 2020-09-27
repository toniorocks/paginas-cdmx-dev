import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';

/** A hero's name can't match the hero's alter ego */
export const passwordMatch: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const pass = control.get('pass');
    const confirma = control.get('confirma');
  
    return pass.value === confirma.value ? { passwordMatch: true } : null;
};





