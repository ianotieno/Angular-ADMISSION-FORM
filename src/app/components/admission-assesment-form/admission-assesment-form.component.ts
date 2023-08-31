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
    
    {type: 'date', name: 'dob', label: 'Enter date of admission', hint: 'MM/DD/YYYY'},

    {type: 'sectionTitle', title: 'PERSONAL DETAILS:', color: '#000000'},
    {type: 'text', name: '', placeHolder: 'Title', label: 'Title'},
    {type: 'checkbox', name: 'Title', label: "Title", options: [
      {value: 'Title',  label: 'Mr',  checked: false},
      {value: 'Title',  label: 'Mrs',  checked: false},
      {value: 'Title', label: 'Ms',  checked: false},
      {value: 'Title',  label: 'Miss',  checked: false},
      {value: 'Title',  label: 'Dr',  checked: false},
    ]},
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
    {type: 'groupedInputs', name: 'EMERGENCY CONTACT PERSON', label:'SECOND CONTACT PERSON:', inputs: [
      {type: 'text', name: 'Name', placeHolder: 'Name', label: 'Name'},
      {type: 'textarea', name: 'Relationshiptopatient', placeHolder: 'Relationship to patient:', label: 'Relationship to patient:'},
      {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
      {type: 'text', name: 'Cellphone', placeHolder: 'Cell phone', label: 'Cell phone'},
      {type: 'text', name: 'Workphone', placeHolder: 'Work phone', label: 'Work phone'},
    ]},
    {type: 'groupedInputs', name: 'EMERGENCY CONTACT PERSON', label:'THIRD CONTACT PERSON:', inputs: [
      {type: 'text', name: 'Name', placeHolder: 'Name', label: 'Name'},
      {type: 'textarea', name: 'Relationshiptopatient', placeHolder: 'Relationship to patient:', label: 'Relationship to patient:'},
      {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
      {type: 'text', name: 'Cellphone', placeHolder: 'Cell phone', label: 'Cell phone'},
      {type: 'text', name: 'Workphone', placeHolder: 'Work phone', label: 'Work phone'},
    ]},
    {type: 'sectionTitle', title: 'HOW WILL YOU CLAIM  PAY FOR THIS ADMISSION?:', color: '#000000'},
    {type: 'checkbox', name: 'claimpay', label: "Pick your checkbox options", options: [
      {value: 'PrivateHealth', label: 'Private Health Insurance (Kindly indicate which one below, ask the nurse/ admitting officer if the hospital provides for the same) ',  checked: true},
      {value: 'Nhif',  label: 'Nhif',  checked: false},
      {value: 'Cash',  label: 'Cash',  checked: false},
      {value: 'other', label: 'Other (kindly explain below)',  checked: false},
    ]},
    {type: 'textarea', name: 'Other', placeHolder: 'kindly explain', label:'kindly explain'},
    {type: 'sectionTitle', title: 'Videography and photography aided treatment:', color: '#000000'},
    {type: 'sectionTitle', title: 'Creswave hospital, with your consent wishes to use videos and photos to track the progress of our clients.These videos will solely be used for this purpose and will only be shared among family and clinical staff involved in the direct care of the client. They will also be shared at the discretion of the client/ guardian.This will only happen if the family / relatives agree and sign the consent below.'
    , color: '#000000'},
    {type: 'sectionTitle', title: 'This will only happen if the family / relatives agree and sign the consent below', color: '#000000'},
    
    {type: 'textarea', name: 'guardian', placeHolder: 'Signature of patient/ parent / guardian:', label:'Signature of patient/ parent / guardian:'},
    {type: 'text', name: 'Nameofpatient', placeHolder: 'Name of patient/ parent / guardian', label:'Name of patient/ parent / guardian'},
    {type: 'date', name: 'dob', label: 'Enter a date of Adminsion', hint: 'MM/DD/YYYY'},

    {type: 'sectionTitle', title: 'SECTION C: ACKNOWLEDGMENT', color: '#000000'},
    {type: 'sectionTitle', title: 'All patients to complete.', color: '#000000'},
    {type: 'sectionTitle', title: 'By signing this form I acknowledge that:', color: '#000000'},
    {type: 'checkbox', name: 'Bysigning', label: "By signing this form I acknowledge that:", alignment:"vertical",   options: [
      { label: 'I certify that the information contained on this form is true and correct to the best of my knowledge. ',value: 'PrivateHealth',  checked: true},
      {value: ' lossordamage ', label: 'I understand that Creswave hospital will not accept any responsibility for loss or damage to patients’ valuables.',  checked: false},
      {value: 'Cash', label: 'I have read and understood the information, and accept the conditions, set out in this form, and have no further questions', checked: false},
      {value: 'Cash', label: 'I understand the costs are estimates only and subject to change as a result of variations in the actual treatment received.',  checked: false},
      {value: 'Cash', label: 'I acknowledge that it is my ultimate responsibility to confirm with my health insurer the level of cover held',  checked: false},
      {value: 'Cash', label: 'I accept responsibility for full payment of all amounts for hospital fees and charges not funded by my insurer, and will finalize payment at time of discharge.',  checked: false},  
    ]},
    
    {type: 'text', name: 'Nameofpatient', placeHolder: 'Name of patient/ parent / guardian', label:'Name of patient/ parent / guardian'},
    {type: 'textarea', name: 'guardian', placeHolder: 'Signature of patient/ parent / guardian:', label:'Signature of patient/ parent / guardian:'},
    {type: 'date', name: 'dob', label: 'Enter a date ', hint: 'MM/DD/YYYY'},


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
    Occupation: ['', Validators.required],
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
    guardian: ['', Validators.required],
    Nameofpatient: ['', Validators.required],
    Bysigning: ['', Validators.required],
    Relationshiptopatient: ['', Validators.required],
    Other: ['', Validators.required],
  });

  onSave() {

  }
}

