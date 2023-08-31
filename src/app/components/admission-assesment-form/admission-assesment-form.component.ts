import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-admission-assesment-form',
  templateUrl: './admission-assesment-form.component.html',
  styleUrls: ['./admission-assesment-form.component.css']
})
export class AdmissionAssesmentFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  formContents: Array<FormContent> = [
    
  ]
  profileForm = this.formBuilder.group({
  
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }

}
