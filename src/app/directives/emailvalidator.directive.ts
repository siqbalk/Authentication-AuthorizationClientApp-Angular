import { FormControl, EmailValidator, NG_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';

function validateEmailFactory() {
    return (c: FormControl) => {
      // tslint:disable-next-line:prefer-const
      let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      return EMAIL_REGEXP.test(c.value) ? null : {
        validateEmail: {
          valid: false
        }
      };
    };
  }

  // tslint:disable-next-line:align
  @Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[validateEmail][ngModel],[validateEmail][formControl]',
    providers: [
      { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator), multi: true }
    ]
  })
// tslint:disable-next-line:directive-class-suffix
export class Emailvalidator {
    // tslint:disable-next-line:ban-types
    validator: Function;

    constructor() {
      this.validator = validateEmailFactory();
    }

    validate(c: FormControl) {
      return this.validator(c);
    }
}
