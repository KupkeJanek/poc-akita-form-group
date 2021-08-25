import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consumer-three',
  templateUrl: './consumer-three.component.html',
  styleUrls: ['./consumer-three.component.scss'],
})
export class ConsumerThreeComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
