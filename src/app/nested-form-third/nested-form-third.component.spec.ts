import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormThirdComponent } from './nested-form-third.component';

describe('NestedFormThirdComponent', () => {
  let component: NestedFormThirdComponent;
  let fixture: ComponentFixture<NestedFormThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedFormThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
