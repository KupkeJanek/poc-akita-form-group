import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { createEffect } from '@datorama/akita-ng-effects';
import { debounceTime, tap } from 'rxjs/operators';
import { MyFormQuery } from './my-form.query';
import { MyFormService } from './my-form.service';
@Injectable()
export class MyFormEffects {
  constructor(
    private myFormQuery: MyFormQuery,
    private myFormService: MyFormService
  ) {}
  // Die App reagiert auf changes des FormControl "age"
  // und setzt die validators neu
  ageControlEffect$ = createEffect(
    () =>
      this.myFormQuery.getFormControlValueChanges('age').pipe(
        tap((value) => {
          if (value) {
            this.myFormService.setValidator(
              [Validators.required, Validators.min(value)],
              'olderThanAge'
            );
          }
        })
      ),
    { dispatch: false }
  );

  // Hier wird auf sämtliche änderungen von FormGroup.valuechanges reagiert
  formChangesEffect$ = createEffect(
    () =>
      this.myFormQuery
        .getFormValueChanges()
        .pipe(debounceTime(100))
        .pipe(
          tap(() => {
            this.myFormService.updateValidFormControls();
          })
        ),
    { dispatch: false }
  );
}
