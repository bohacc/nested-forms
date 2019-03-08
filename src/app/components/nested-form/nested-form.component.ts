import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private parent: FormGroupDirective
  ) {
    console.log('Constructor - NestedFormComponent');
    console.log(this.parent.form);
  }

  ngOnInit() {
    this.form = this.parent.form;
    this.form.addControl('birthPlace', new FormControl('Benešov'));
    console.log('OnInit - NestedFormComponent');
    console.log(this.parent.form);
  }

}
