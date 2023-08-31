import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-discharge-form',
  templateUrl: './discharge-form.component.html',
  styleUrls: ['./discharge-form.component.css'],
})
export class DischargeFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  formContents: Array<FormContent> = [
    {type: 'text', name: 'patientName', placeHolder: 'Enter patient name', label: 'Patient Name?'},
    {type: 'text', name: 'age', placeHolder: 'Age', label: 'Patient Age?'},
    {type: 'radios', name: 'gender', label: "Pick Patient Gender", options: [
      {label: 'Female', value: 'female', checked: true},
      {label: 'Male', value: 'male', checked: false}
    ]},
    {type: 'text', name: 'adminNo', placeHolder: 'Admin No', label: 'Admin No?'},
    {type: 'dateRange', name: 'dob', label: 'Enter a date of D.O.A-D.O.D', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
      start: {name: 'dob', placeHolder: 'D.O.A'},
      end: {name: 'dob', placeHolder: 'D.O.D'}
    }},
    {type: 'text', name: 'consultantNames', placeHolder: 'Name Of Consultant', label: 'Name Of Consultant(S): ?'},
    {type: 'textarea', name: 'admission', placeHolder: 'Reason For Admission', label: 'Reason For Admission?'},
    {type: 'text', name: 'comorbidities', placeHolder: 'Comorbidities', label: 'Comorbidities: '},
    {type: 'textarea', name: 'diagnosis', placeHolder: 'Diagnosis', label: 'Diagnosis'},
    {type: 'textarea', name: 'history', placeHolder: 'History (Medical & Surgical):', label: 'History (Medical & Surgical):'},
    {type: 'textarea', name: 'investigations', placeHolder: 'Investigations', label: 'Investigations:'},
    {type: 'textarea', name: 'labs', placeHolder: 'Labs & Attached Results:', label: 'Labs & Attached Results:'},
    {type: 'textarea', name: 'management', placeHolder: 'Management: ', label: 'Management:'},
    {type: 'groupedInputs', name: 'physiotherapy',  inputs: [
      {type: 'text', name: 'rom', placeHolder: 'Rom', label: 'Rom:'},
      {type: 'text', name: 'gait', placeHolder: 'Gait', label: 'Gait'},
      {type: 'text', name: 'mobility', placeHolder: 'Mobility (Transfers)', label: 'Mobility (Transfers):'},
      {type: 'text', name: 'motor', placeHolder: 'Motor/ Strength', label: 'Motor/ Strength:'},]
    },
    {type: 'textarea', name: 'occupational', placeHolder: 'Occupational Therapy- Functionality', label: 'Occupational Therapy- Functionality:'},
    {type: 'textarea', name: 'speech', placeHolder: 'Speech Therapy-Feeding & Swallowing', label: 'Speech Therapy-Feeding & Swallowing:'},
    {type: 'textarea', name: 'nursing', placeHolder: 'Nursing', label: 'Nursing:'},
    {type: 'textarea', name: 'clinical', placeHolder: 'Clinical Condition On Discharge', label: 'Clinical Condition On Discharge:'},
    {type: 'textarea', name: 'medical', placeHolder: 'Medication On Discharge', label: 'Medication On Discharge:'},
    {type: 'textarea', name: 'instruction', placeHolder: 'Instruction On Discharge', label: 'Instruction On Discharge:'},
    {type: 'text', name: 'doctor', placeHolder: 'Doctor’s Name', label: 'Doctor’s Name:'}
  ]

  profileForm = this.formBuilder.group({
    patientName: ['', Validators.required],
    age: ['', Validators.required],
    gender: ['male', Validators.required],
    dob: ['', Validators.required],
    adminNo: ['', Validators.required],
    consultantNames: ['', Validators.required],
    admission: ['', Validators.required],
    comorbidities: ['', Validators.required],
    diagnosis: ['', Validators.required],
    history: ['', Validators.required],
    investigations: ['', Validators.required],
    labs: ['', Validators.required],
    management: ['', Validators.required],
    rom: ['', Validators.required],
    gait: ['', Validators.required],
    mobility: ['', Validators.required],
    motor: ['', Validators.required],
    occupational: ['', Validators.required],
    speech: ['', Validators.required],
    nursing: ['', Validators.required],
    clinical: ['', Validators.required],
    medical: ['', Validators.required],
    instruction: ['', Validators.required],
    doctor: ['', Validators.required],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
