import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormSecondComponent } from './nested-form-second.component';

describe('NestedFormSecondComponent', () => {
  let component: NestedFormSecondComponent;
  let fixture: ComponentFixture<NestedFormSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
