import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, StoreConfig } from '@datorama/akita';

export interface MyFormState {
  validControlsCount: number;
  form: FormGroup;
}

export function createInitialState(): MyFormState {
  return {
    form: null,
    validControlsCount: -1,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ConfigName' })
export class MyFormStore extends Store<MyFormState> {
  constructor() {
    super(createInitialState());
    const form: FormGroup = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null, Validators.required),
      olderThanAge: new FormControl(null, Validators.required),
    });
    this.update({ form });
  }
}
