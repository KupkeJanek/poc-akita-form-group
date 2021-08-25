import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MyFormQuery } from 'src/store/my-form.query';
import { MyFormService } from 'src/store/my-form.service';
import { MyFormStore } from 'src/store/my-form.store';

@Component({
  selector: 'app-consumer-one',
  templateUrl: './consumer-one.component.html',
  styleUrls: ['./consumer-one.component.scss'],
})
export class ConsumerOneComponent implements OnInit {
  @Input() form: FormGroup;
  constructor(
    private myFormQuery: MyFormQuery,
    private myFormService: MyFormService
  ) {}

  ngOnInit(): void {}
}
