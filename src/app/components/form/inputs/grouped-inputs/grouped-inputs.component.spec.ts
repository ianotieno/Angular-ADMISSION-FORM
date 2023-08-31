import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedInputsComponent } from './grouped-inputs.component';

describe('GroupedInputsComponent', () => {
  let component: GroupedInputsComponent;
  let fixture: ComponentFixture<GroupedInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedInputsComponent]
    });
    fixture = TestBed.createComponent(GroupedInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
