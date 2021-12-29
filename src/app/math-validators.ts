import {  AbstractControl } from '@angular/forms';

export class MathValidators {
    static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
        const sum = form.value[target];
        const fisrNumber = form.value[sourceOne];
        const secondNumber = form.value[sourceTwo];

        if(fisrNumber + secondNumber === parseInt(sum)) {
          return null;
        }
   
        return { addition: true };
        };
    }
}

