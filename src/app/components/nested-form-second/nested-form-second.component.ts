import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-nested-form-second',
  templateUrl: './nested-form-second.component.html',
  styleUrls: ['./nested-form-second.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedFormSecondComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) {
    console.log('Constructor - NestedFormSecondComponent');
    console.log(this.parent.form);
  }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('country', new FormControl('Česká republika', []));
    console.log('OnInit - NestedFormSecondComponent');
    console.log(this.parent.form);
  }

}
