import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MyFormState, MyFormStore } from './my-form.store';

@Injectable({ providedIn: 'root' })
export class MyFormQuery extends Query<MyFormState> {
  validControlsCount$: Observable<number> = this.select((state) => {
    return state.validControlsCount;
  });

  constructor(protected store: MyFormStore) {
    super(store);
  }

  getFormControlValueChanges(formControlName: string) {
    return this.select((state) => state.form).pipe(
      switchMap((form) => {
        const formControl = form?.controls[formControlName];
        return formControl?.valueChanges ? formControl.valueChanges : of(null);
      })
    );
  }

  getFormValueChanges() {
    return this.select((state) => state.form).pipe(
      switchMap((form) => {
        return form.valueChanges;
      })
    );
  }
}
