import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { MyFormStore } from './my-form.store';

@Injectable({ providedIn: 'root' })
export class MyFormService {
  constructor(private store: MyFormStore) {}

  setValidator(validators: ValidatorFn[], formControlName: string) {
    const formControl = this.store.getValue().form.controls[formControlName];
    formControl.setValidators(validators);
    formControl.updateValueAndValidity();
  }

  setAsTouched() {
    this.store.getValue().form.markAllAsTouched();
  }

  resetForm(data?: any) {
    this.store.getValue().form.reset();
    this.store.getValue().form.patchValue(data ? data : {});
    this.setAsTouched();
  }

  updateValidFormControls() {
    const form = this.store.getValue().form.controls;
    let validControlsCount = 0;
    for (const key of Object.keys(form)) {
      !form[key].invalid ? validControlsCount++ : null;
    }
    this.store.update({ validControlsCount });
  }
}
