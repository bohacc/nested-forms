import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-nested-form-third',
  templateUrl: './nested-form-third.component.html',
  styleUrls: ['./nested-form-third.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class NestedFormThirdComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) {
    console.log(this.parent.form);
  }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('otherThird', new FormControl());
    console.log(this.parent.form);
  }
}
