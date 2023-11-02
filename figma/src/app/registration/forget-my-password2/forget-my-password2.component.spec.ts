import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetMyPassword2Component } from './forget-my-password2.component';

describe('ForgetMyPassword2Component', () => {
  let component: ForgetMyPassword2Component;
  let fixture: ComponentFixture<ForgetMyPassword2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetMyPassword2Component]
    });
    fixture = TestBed.createComponent(ForgetMyPassword2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
