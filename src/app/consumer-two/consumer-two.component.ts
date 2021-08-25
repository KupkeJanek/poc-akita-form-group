import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consumer-two',
  templateUrl: './consumer-two.component.html',
  styleUrls: ['./consumer-two.component.scss'],
})
export class ConsumerTwoComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
