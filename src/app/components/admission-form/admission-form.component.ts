import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {
  constructor(private formBuilder: FormBuilder) {}
  formContents: Array<FormContent> = [
    {type: 'text', name: 'patientName', placeHolder: 'Enter patient name', label: 'Patient Name?'},
    {type: 'text', name: 'Diagnosis', placeHolder: 'Diagnosis', label: 'Diagnosis'},
    {type: 'text', name: 'VitalSigns', placeHolder: 'Vital Signs ', label: 'Vital Signs'},
    {type: 'text', name: 'Allergies', placeHolder: 'Allergies', label: 'Allergies'},
    {type: 'sectionTitle', title: 'Admission Form', color: '#000000'},
    {type: 'text', name: 'AdmittingNurse', placeHolder: 'Admitting Nurse', label: 'Admitting Nurse'},
    {type: 'text', name: 'Hospital', placeHolder: 'Hospital/ institution referring the patient', label: 'Hospital/ institution referring the patient:'},
    {type: 'text', name: 'Nameofreferringdoctor', placeHolder: 'Name of referring doctor', label: 'Name of referring doctor'},
    {type: 'text', name: 'Doctorscontact', placeHolder: 'Doctor’s contact', label: 'Doctor’s contact'},
    {type: 'sectionTitle', title: 'Admission Date:', color: '#000000'},
    {type: 'dateRange', name: 'dob', label: 'Enter a date of D.O.A-D.O.D', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
      start: {name: 'dob', placeHolder: 'D.O.A'},
      end: {name: 'dob', placeHolder: 'D.O.D'}
    }},
    {type: 'sectionTitle', title: 'PERSONAL DETAILS:', color: '#000000'},
    {type: 'text', name: 'Title', placeHolder: 'Title', label: 'Title'},
    {type: 'text', name: 'Surname', placeHolder: 'Surname', label: 'Surname'},
    {type: 'text', name: 'Firstname', placeHolder: 'First name', label: 'First name'},
    {type: 'text', name: 'Othernames', placeHolder: 'Other names', label: 'Other names'},

   
   
    {type: 'groupedInputs', name: 'Residential Address:', label:'Residential Address:', inputs: [
    {type: 'text', name: 'County', placeHolder: 'County', label: 'County'},
    {type: 'text', name: 'Town', placeHolder: 'Town', label: 'Town'},
    {type: 'text', name: 'Arealocality', placeHolder: 'Area/ locality', label: 'Area/ locality'},
    {type: 'text', name: 'PostalAddress', placeHolder: 'Postal Address (if different):', label: 'Postal Address (if different):'},
    {type: 'text', name: 'Code', placeHolder: 'Code', label: 'Code'},
  ]},

    {type: 'text', name: 'Emailaddress', placeHolder: 'Email address', label: 'Email address'},
    {type: 'text', name: 'Telephone', placeHolder: 'Telephone:  Home', label: 'Telephone:  Home'},
    {type: 'text', name: 'Business', placeHolder: 'Business/ Work', label: 'Business/ Work'},
    {type: 'text', name: 'Occupation', placeHolder: 'Occupation', label: 'Occupation'},
    
    {type: 'text', name: 'MaritalStatus', placeHolder: 'Marital Status', label: 'Marital Status'},
    {type: 'text', name: 'Nationality', placeHolder: 'Nationality', label: 'Nationality'},
    {type: 'text', name: 'Languages', placeHolder: 'Languages client speaks/ understands', label: 'Languages client speaks/ understands'},
    {type: 'text', name: 'Religion', placeHolder: 'Religion', label: 'Religion'},
    
    {type: 'groupedInputs', name: 'EMERGENCY CONTACT PERSON', label:'EMERGENCY CONTACT PERSON:', inputs: [
      {type: 'text', name: 'Name', placeHolder: 'Name', label: 'Name'},
      {type: 'textarea', name: 'Relationship', placeHolder: 'Relationship to patient:', label: 'Relationship to patient:'},
      {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
      {type: 'text', name: 'Cellphone', placeHolder: 'Cell phone', label: 'Cell phone'},
      {type: 'text', name: 'Workphone', placeHolder: 'Work phone', label: 'Work phone'},
    ]},
    {type: 'groupedInputs', name: 'SECOND CONTACT PERSON', label:'EMERGENCY CONTACT PERSON:', inputs: [
      {type: 'text', name: 'Name', placeHolder: 'Name', label: 'Name'},
      {type: 'textarea', name: 'Relationshiptopatient', placeHolder: 'Relationship to patient:', label: 'Relationship to patient:'},
      {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
      {type: 'text', name: 'Cellphone', placeHolder: 'Cell phone', label: 'Cell phone'},
      {type: 'text', name: 'Workphone', placeHolder: 'Work phone', label: 'Work phone'},
    ]},
    {type: 'groupedInputs', name: 'THIRD CONTACT PERSON', label:'EMERGENCY CONTACT PERSON:', inputs: [
      {type: 'text', name: 'Name', placeHolder: 'Name', label: 'Name'},
      {type: 'textarea', name: 'Relationshiptopatient', placeHolder: 'Relationship to patient:', label: 'Relationship to patient:'},
      {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
      {type: 'text', name: 'Cellphone', placeHolder: 'Cell phone', label: 'Cell phone'},
      {type: 'text', name: 'Workphone', placeHolder: 'Work phone', label: 'Work phone'},
    ]},
    {type: 'sectionTitle', title: 'HOW WILL YOU CLAIM  PAY FOR THIS ADMISSION?:', color: '#000000'},
    {type: 'checkbox', name: 'claimpay', label: "Pick your checkbox options", options: [
      {label: 'Private Health Insurance (Kindly indicate which one below, ask the nurse/ admitting officer if the hospital provides for the same) ', value: 'PrivateHealth', checked: true},
      {label: 'Nhif', value: 'Nhif', checked: false},
      {label: 'Cash', value: 'Cash', checked: false},
      {label: 'Other (kindly explain below)', value: 'other', checked: false},
    ]},

  ];

  admissionForm = this.formBuilder.group({
    patientName: ['', Validators.required],
    VitalSigns: ['', Validators.required],
    Allergies: ['', Validators.required],
    AdmittingNurse: ['', Validators.required],
    Hospital:['', Validators.required],
    Nameofreferringdoctor: ['', Validators.required],
    Doctorscontact: ['', Validators.required],
    Title: ['', Validators.required],
    Surname: ['', Validators.required],
    dob: ['', Validators.required],
    Firstname: ['', Validators.required],
    Othernames: ['', Validators.required],
    County: ['', Validators.required],
    Town: ['', Validators.required],
    diagnosis: ['', Validators.required],
    Arealocality: ['', Validators.required],
    PostalAddress: ['', Validators.required],
    Code: ['', Validators.required],
    Emailaddress: ['', Validators.required],
    Telephone: ['', Validators.required],
    Business: ['', Validators.required],
    mobility: ['', Validators.required],
    motor: ['', Validators.required],
    occupation: ['', Validators.required],
    MaritalStatus: ['', Validators.required],
    Nationality: ['', Validators.required],
    Languages: ['', Validators.required],
    Religion: ['', Validators.required],
    Name: ['', Validators.required],
    doctor: ['', Validators.required],
    Relationship: ['', Validators.required],
    Address: ['', Validators.required],
    Cellphone: ['', Validators.required],
    Workphone: ['', Validators.required],
    claimpay: ['', Validators.required],
  });

  onSave() {

  }
}
