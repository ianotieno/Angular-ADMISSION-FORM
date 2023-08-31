import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeFormComponent } from './discharge-form.component';

describe('DischargeFormComponent', () => {
  let component: DischargeFormComponent;
  let fixture: ComponentFixture<DischargeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DischargeFormComponent]
    });
    fixture = TestBed.createComponent(DischargeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
