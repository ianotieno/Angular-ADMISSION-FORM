import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionAssesmentFormComponent } from './admission-assesment-form.component';

describe('AdmissionAssesmentFormComponent', () => {
  let component: AdmissionAssesmentFormComponent;
  let fixture: ComponentFixture<AdmissionAssesmentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmissionAssesmentFormComponent]
    });
    fixture = TestBed.createComponent(AdmissionAssesmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
