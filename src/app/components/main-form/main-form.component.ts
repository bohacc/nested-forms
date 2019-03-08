import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainFormComponent implements OnInit {
  public mainForm: FormGroup;

  constructor() {
    this.mainForm = new FormGroup({
      firstName: new FormControl('Martin', []),
      lastName: new FormControl('Boháč', []),
    });
    console.log('Constructor - MainFormComponent');
  }

  ngOnInit() {
    console.log('OnInit - MainFormComponent');
  }

}
