import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class NestedFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) {
    console.log(this.parent.form);
  }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('other', new FormControl());
    console.log(this.parent.form);
  }

}
