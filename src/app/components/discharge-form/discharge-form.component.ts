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
   
    {type: 'sectionTitle', title: 'ENSURE ALL QUESTIONS ARE COMPLETED', color: '#000000'},
    {type: 'text', name: 'patientName', placeHolder: 'Enter patient name', label: 'Patient Name?'},
    {type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address'},
    {type: 'text', name: 'Postcode', placeHolder: 'Postcode', label: 'Postcode'},

    {type: 'dateRange', name: 'dob', label: 'Enter a Date of Birth:', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
      start: {name: 'dob', placeHolder: 'D.O.A'},
      end: {name: 'dob', placeHolder: 'D.O.D'}
    }},

    {type: 'text', name: 'reaction', placeHolder: 'reaction', label: 'Have you ever had a reaction to:'},
    {type: 'checkbox', name: 'claimpay', label: " ", options: [
      {label: 'Drugs :Yes',value: 'Drugs',   checked: false},
      {label: 'No',value: 'Drugs',   checked: false},
      ]},
    {type: 'textarea', name: 'details', placeHolder: 'details', label: 'details'},  
    {type: 'checkbox', name: 'claimpay', label: " ", options: [
      {label: 'Food :Yes',value: 'Food',   checked: false},
      {label: 'No',value: 'Food',   checked: false},
        ]},  
    {type: 'textarea', name: 'details', placeHolder: 'details', label: 'details'},

    {type: 'checkbox', name: 'claimpay', label: " ", options: [
      {label: 'Latex:Yes',value: 'Latex',   checked: false},
      {label: 'No',value: 'Latex',   checked: false},
        ]},  
    {type: 'textarea', name: 'details', placeHolder: 'details', label: 'details'},

    {type: 'checkbox', name: 'claimpay', label: " ", options: [
      {label: 'Other:Yes',value: 'Food',   checked: false},
      {label: 'No',value: 'Food',   checked: false},
        ]},  
    {type: 'textarea', name: 'details', placeHolder: 'details', label: 'details'},
    {type: 'sectionTitle', title: 'PHYSICAL DETAILS:', color: '#000000'},

    {type: 'text', name: 'Weight', placeHolder: 'What is your weight:kilograms', label: 'What is your weight:kilograms'},
    {type: 'text', name: 'height', placeHolder: 'What is your height:centimeters', label: 'What is your height:centimeters'},
    
    {type: 'sectionTitle', title: 'PREVIOUS OPERATIONS:', color: '#000000'},
    {type: 'checkbox', name: 'previousoperations', label: "Have you had any previous operations ", options: [
      {label: 'Yes',value: 'Food',   checked: false},
      {label: 'No',value: 'Food',   checked: false},
        ]},
    {type: 'textarea', name: 'details', placeHolder: 'details', label: 'details'},

    {type: 'sectionTitle', title: 'CARDIAC', color: '#000000'},
    {type: 'checkbox', name: 'heartattack', label: "Have you ever had a heart attack? ", options: [
      {label: 'Yes',value: 'heartattack',   checked: false},
      {label: 'No',value: 'heartattack',   checked: false},
        ]},
    {type: 'text', name: 'year', placeHolder: 'year', label: 'year'}, 

    {type: 'checkbox', name: 'heartsurgery', label: "Have you ever had heart surgery? ", options: [
      {label: 'Yes',value: 'heartsurgery',   checked: false},
      {label: 'No',value: 'heartsurgery',   checked: false},
        ]},
    {type: 'text', name: 'year', placeHolder: 'year', label: 'year'},  

    {type: 'checkbox', name: 'pacemaker', label: "Do you have a pacemaker/internal defibrillator? ", options: [
      {label: 'Yes',value: 'pacemaker',   checked: false},
      {label: 'No',value: 'pacemaker',   checked: false},
        ]},   
    {type: 'groupedInputs', name: 'pacemaker', label:'If you have a pacemaker', inputs: [
      {type: 'text', name: 'Make', placeHolder: 'Make', label: 'Make'},
      {type: 'text', name: 'Model', placeHolder: 'Model', label: 'Model'},
      {type: 'text', name: 'Lastchecked', placeHolder: 'Last checked', label: 'Last checked'},
    ]},

   {type: 'checkbox', name: 'heartproblems', label: "Do you have any other heart problems? ", options: [
      {label: 'Yes',value: 'heartproblems',   checked: false},
      {label: 'No',value: 'heartproblems',   checked: false},
        ]},
    {type: 'text', name: 'heartproblems', placeHolder: 'If yes, specify:', label: 'If yes, specify:'}, 
    
    {type: 'checkbox', name: 'irregularheartbeat', label: "Do you have an irregular heart beat?", options: [
      {label: 'Yes',value: 'irregularheartbeat',   checked: false},
      {label: 'No',value: 'irregularheartbeat',   checked: false},
        ]},

    {type: 'checkbox', name: 'tendencytobleed', label: "Do you have a tendency to bleed, clot or bruise easily?", options: [
      {label: 'Yes',value: 'tendencytobleed',   checked: false},
      {label: 'No',value: 'tendencytobleed',   checked: false},
        ]},

    {type: 'checkbox', name: 'irregularheartbeat', label: "Do you have an irregular heart beat?", options: [
      {label: 'Yes',value: 'irregularheartbeat',   checked: false},
      {label: 'No',value: 'irregularheartbeat',   checked: false},
            ]},
        

    
    
    {type: 'text', name: 'Nameofpatient', placeHolder: 'Name of patient/ parent / guardian', label:'Name of patient/ parent / guardian'},
    {type: 'textarea', name: 'guardian', placeHolder: 'Signature of patient/ parent / guardian:', label:'Signature of patient/ parent / guardian:'},
    {type: 'dateRange', name: 'dob', label: 'Enter a date of D.O.A-D.O.D', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
      start: {name: 'dob', placeHolder: 'D.O.A'},
      end: {name: 'dob', placeHolder: 'D.O.D'}
    }},

  ]

  profileForm = this.formBuilder.group({
    patientName: ['', Validators.required],
    Address: ['', Validators.required],
    Postcode: ['', Validators.required],
    reaction: ['', Validators.required],
    Food:['', Validators.required],
    Drug: ['', Validators.required],
    details: ['', Validators.required],
    Latex: ['', Validators.required],
    Weight: ['', Validators.required],
    dob: ['', Validators.required],
    height: ['', Validators.required],
    previousoperations: ['', Validators.required],
    heartattack: ['', Validators.required],
    year: ['', Validators.required],
    heartsurgery: ['', Validators.required],
    pacemaker: ['', Validators.required],
    Make: ['', Validators.required],
    Model: ['', Validators.required],
    Lastchecked: ['', Validators.required],
    heartproblems: ['', Validators.required],
    irregularheartbeat: ['', Validators.required],
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
    
    Cellphone: ['', Validators.required],
    Workphone: ['', Validators.required],
    claimpay: ['', Validators.required],
    guardian: ['', Validators.required],
    Nameofpatient: ['', Validators.required],
    Bysigning: ['', Validators.required],
    
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
