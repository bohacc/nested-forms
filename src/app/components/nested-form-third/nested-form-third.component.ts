import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedFormThirdComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) {
    console.log('Constructor - NestedFormThirdComponent');
    console.log(this.parent.form);
  }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('planet', new FormControl('Mars'));
    console.log('OnInit - NestedFormThirdComponent');
    console.log(this.parent.form);
  }
}
