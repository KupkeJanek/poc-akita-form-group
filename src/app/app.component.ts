import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyFormQuery } from 'src/store/my-form.query';
import { MyFormService } from 'src/store/my-form.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form$: Observable<FormGroup>;
  validControlsCount$: Observable<number>;
  constructor(
    private myFormQuery: MyFormQuery,
    private myFormService: MyFormService
  ) {}
  ngOnInit() {
    this.form$ = this.myFormQuery.select((state) => state.form);
    this.validControlsCount$ = this.myFormQuery.validControlsCount$;
  }

  onNewForm(data: any) {
    this.myFormService.resetForm(data);
  }
}
