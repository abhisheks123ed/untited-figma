import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetMyPassword3Component } from './forget-my-password3.component';

describe('ForgetMyPassword3Component', () => {
  let component: ForgetMyPassword3Component;
  let fixture: ComponentFixture<ForgetMyPassword3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetMyPassword3Component]
    });
    fixture = TestBed.createComponent(ForgetMyPassword3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
