import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTitleComponent } from './form-title.component';

describe('TitleComponent', () => {
  let component: FormTitleComponent;
  let fixture: ComponentFixture<FormTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormTitleComponent]
    });
    fixture = TestBed.createComponent(FormTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
