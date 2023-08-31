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

    {type: 'checkbox', name: 'bloodpressure', label: "Have you ever had high blood pressure?", options: [
      {label: 'Yes',value: 'bloodpressure',   checked: false},
      {label: 'No',value: 'blood pressure',   checked: false},
            ]},
        
    {type: 'sectionTitle', title: 'RESPIRATORY:', color: '#000000'},
    {type: 'checkbox', name: ' smoke', label: "Do you smoke?", options: [
      {label: 'Yes',value: ' smoke',   checked: false},
      {label: 'No',value: ' smoke',   checked: false},
            ]},
    {type: 'text', name: ' smoking', placeHolder: 'Any history of smoking:', label: 'Any history of smoking	'}, 

    {type: 'checkbox', name: 'Asthma', label: "Do you have Asthma?", options: [
      {label: 'Yes',value: 'Asthma',   checked: false},
      {label: 'No',value: 'Asthma',   checked: false},
       ]},
    {type: 'checkbox', name: 'Bronchitis', label: "Do you have Bronchitis?", options: [
       {label: 'Yes',value: 'Bronchitis',   checked: false},
       {label: 'No',value: 'Bronchitis',   checked: false},
        ]},                  
    {type: 'checkbox', name: 'Sleepapnea', label: "Do you have Sleep apnea?", options: [
        {label: 'Yes',value: 'Sleepapnea',   checked: false},
        {label: 'No',value: 'Sleepapnea',   checked: false},
                ]},
      {type: 'checkbox', name: 'nebulizer', label: "Do you use a nebulizer, puffer or EPAP/CPAP machine or home Oxygen? (please bring puffers with you)?", options: [
         {label: 'Yes',value: 'nebulizer',   checked: false},
         {label: 'No',value: 'nebulizer',   checked: false},
            ]},         
     {type: 'checkbox', name: 'Respirations', label: "Respirations", options: [
         {label: 'Regular ',value: 'Respirations',   checked: false},
         {label: 'Unlabored',value: 'Respirations',   checked: false},
         {label: 'Labored',value: 'Respirations',   checked: false},
           ]}, 
    {type: 'checkbox', name: 'Shortnessofbreath', label: "Shortness of breath ?", options: [
       {label: 'Yes',value: 'Shortnessofbreath',   checked: false},
       {label: 'No',value: 'Shortnessofbreath',   checked: false},
               ]},      
           
    {type: 'sectionTitle', title: ' DIABETES :', color: '#000000'},
    {type: 'checkbox', name: 'diabetes', label: "Do you have diabetes?", options: [
      {label: 'Yes',value: 'diabetes',   checked: false},
      {label: 'No',value: 'diabetes',   checked: false},
       ]}, 
    {type: 'checkbox', name: 'diabetes', label: "If yes?", options: [
      {label: 'Type I',value: 'diabetes',   checked: false},
      {label: 'Type II',value: 'diabetes',   checked: false},
      {label: 'Unsure',value: 'diabetes',   checked: false},
        ]},
    {type: 'checkbox', name: 'diabetes', label: "Controlled by", options: [
      {label: 'Diet',value: 'diabetes',   checked: false},
      {label: 'Tablet',value: 'diabetes',   checked: false},
      {label: 'Insulin',value: 'diabetes',   checked: false},
        ]}, 
     {type: 'checkbox', name: 'diabetes', label: "If you take insulin has your Doctor given you instructions regarding your Diabetic Medication?", options: [
      {label: 'Yes',value: 'diabetes',   checked: false},
      {label: 'No',value: 'diabetes',   checked: false},
      
        ]},                       
   {type: 'sectionTitle', title: ' GASTROINTESTINAL :', color: '#000000'},
   {type: 'checkbox', name: 'gastrointestinal', label: "Do you have hiatus hernia/gastrointestinal ulcers?", options: [
    {label: 'Yes',value: 'gastrointestinal',   checked: false},
    {label: 'No',value: 'gastrointestinal',   checked: false},
       ]},  
   {type: 'checkbox', name: 'specialdietary', label: "Do you have any special dietary requirements?", options: [
    {label: 'Yes',value: 'specialdietary',   checked: false},
    {label: 'No',value: 'specialdietary',   checked: false},
     ]},

     {type: 'sectionTitle', title: 'MUSCULOSKELETAL / MOBILITY:', color: '#000000'},
     {type: 'checkbox', name: 'Mobility', label: "Mobility is ?", options: [
       {label: 'Normal',value: 'Mobility',   checked: false},
       {label: 'Impaired ',value: 'Mobility',   checked: false},
        ]},
     {type: 'checkbox', name: 'Mobility', label: "Do you use an assistive device :", options: [
       {label: 'Yes',value: 'Mobility',   checked: false},
       {label: 'No',value: 'Mobility',   checked: false},
        ]},
    {type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	'},
    
    {type: 'checkbox', name: 'Mobility', label: "Motor development:", options: [
      {label: 'Head control ',value: 'Mobility',   checked: false},
      {label: 'sits ',value: 'Mobility',   checked: false},
      {label: 'walks',value: 'Mobility',   checked: false},
      {label: 'Hemiparesis',value: 'Mobility',   checked: false},
      {label: 'Tremors',value: 'Mobility',   checked: false},
       ]},
    {type: 'checkbox', name: 'Mobility', label: "ADLS:", options: [
       {label: 'Self',value: 'Mobility',   checked: false},
       {label: 'Assist',value: 'Mobility',   checked: false},
       {label: 'Tota',value: 'Mobility',   checked: false},
        ]},
     {type: 'text', name: 'Eating', placeHolder: 'Eating:', label: 'Eating'},
     {type: 'text', name: 'Bathing', placeHolder: 'Bathing:', label: 'Bathing:'},
     {type: 'text', name: 'Dressing', placeHolder: 'Dressing:', label: 'Dressing:'},

     {type: 'sectionTitle', title: 'PROSTHESIS / AIDS:', color: '#000000'},
     {type: 'checkbox', name: 'glasses', label: "Do you wear glasses / contact lenses:", options: [
       {label: 'Yes',value: 'glasses',   checked: false},
       {label: 'No',value: 'glasses',   checked: false},
        ]}, 
     {type: 'checkbox', name: 'HearingAid', label: "Hearing Aid or other hearing appliance:", options: [
       {label: 'Yes',value: 'HearingAid',   checked: false},
       {label: 'No',value: 'HearingAid',   checked: false},
        ]}, 
    {type: 'checkbox', name: 'Dentures', label: "Dentures/Caps/Crowns/Loose teeth:", options: [
       {label: 'Yes',value: 'Dentures',   checked: false},
       {label: 'No',value: 'Dentures',   checked: false},
        ]},   
    {type: 'checkbox', name: 'splints', label: "Do you wear any type of splints:", options: [
       {label: 'Yes',value: 'splints',   checked: false},
       {label: 'No',value: 'splints',   checked: false},
        ]},   
    {type: 'sectionTitle', title: 'OTHER:', color: '#000000'},
     {type: 'checkbox', name: 'HepatitisA', label: "Have you ever tested positive to Hepatitis  A,  B  or C, HIV, TB, MRSA, VRE or CRE?:", options: [
       {label: 'Yes',value: 'HepatitisA',   checked: false},
       {label: 'No',value: 'HepatitisA',   checked: false},
        ]},
    {type: 'text', name: 'HepatitisA', placeHolder: 'Please specify', label: 'Please specify:'},
    {type: 'checkbox', name: 'drinkalcohol', label: "Do you drink alcohol?", options: [
      {label: 'Yes',value: 'drinkalcohol',   checked: false},
      {label: 'No',value: 'drinkalcohol',   checked: false},
       ]},
    {type: 'checkbox', name: 'HepatitisA', label: "Have you ever had a stroke:", options: [
       {label: 'Yes',value: 'HepatitisA',   checked: false},
       {label: 'No',value: 'HepatitisA',   checked: false},
        ]},

      {type: 'dateRange', name: 'dob', label: 'Enter a Date of Birth:', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
      start: {name: 'dob', placeHolder: 'D.O.A'},
      end: {name: 'dob', placeHolder: 'D.O.D'}
    }},
    {type: 'checkbox', name: 'infectiousdisease', label: "Do you have or have you been exposed to an infectious disease in the past 14 days? (e.g. Chickenpox, Measles:", options: [
      {label: 'Yes',value: 'infectiousdisease',   checked: false},
      {label: 'No',value: 'infectiousdisease',   checked: false},
       ]},
   {type: 'checkbox', name: 'surgicalproblems', label: "Do you have any other medical or surgical problems?(e.g. Epilepsy, Liver, Kidney, Psychiatric):", options: [
       {label: 'Yes',value: 'surgicalproblems',   checked: false},
       {label: 'No',value: 'surgicalproblems',   checked: false},
        ]},

    {type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	'}, 
    {type: 'checkbox', name: 'surgicalproblems', label: "Have you ever been diagnosed with cancer:", options: [
      {label: 'Yes',value: 'cancer',   checked: false},
      {label: 'No',value: 'cancer',   checked: false},
       ]},

   {type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify the type of cancer:', label: 'If yes, please specify the type of cancer:	'},
   {type: 'dateRange', name: 'dob', label: 'Enter a Date of Birth:', hint: 'MM/DD/YYYY – MM/DD/YYYY', inputs: {
    start: {name: 'dob', placeHolder: 'D.O.A'},
    end: {name: 'dob', placeHolder: 'D.O.D'}
  }}, 

  
   {type: 'checkbox', name: 'skinulcers', label: "Do you currently have any skin wounds, pressure sores or skin ulcers:", options: [
    {label: 'Yes',value: 'skinulcers',   checked: false},
    {label: 'No',value: 'skinulcers',   checked: false},
     ]},
  {type: 'text', name: 'skinulcers', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	'}, 

  {type: 'checkbox', name: 'interpreter', label: "Do you require an interpreter:", options: [
   {label: 'Yes',value: 'interpreter',   checked: false},
   {label: 'No',value: 'interpreter',   checked: false},
   ]},
   {type: 'text', name: 'interpreter', placeHolder: 'If yes Please specify Language', label: 'Please specify Language'},

  {type: 'checkbox', name: 'interpreter', label: "Do you have someone to interpret for you:", options: [
    {label: 'Yes',value: 'interpreter',   checked: false},
    {label: 'No',value: 'interpreter',   checked: false},
     ]},
     {type: 'text', name: 'interpreter', placeHolder: 'If yes Please Enter Name of person:', label: 'If yes Please Enter Name of person'},
     {type: 'text', name: 'interpreter', placeHolder: 'If yes Please Enter Phone number', label: 'If yes Please Enter Phone number'},
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
    smoke: ['', Validators.required],
    Asthma: ['', Validators.required],
    Bronchitis: ['', Validators.required],
    Sleepapnea: ['', Validators.required],
    nebulizer: ['', Validators.required],
    Respirations: ['', Validators.required],
    Shortnessofbreath: ['', Validators.required],
    diabetes: ['', Validators.required],
    gastrointestinal: ['', Validators.required],
    specialdietary: ['', Validators.required],
    Mobility: ['', Validators.required],
    Eating: ['', Validators.required],
    Bathing: ['', Validators.required],
    Dressing: ['', Validators.required],
    glasses: ['', Validators.required],
    Dentures: ['', Validators.required],
    splints: ['', Validators.required],
    HearingAid: ['', Validators.required],
    HepatitisA: ['', Validators.required],
    drinkalcohol:['', Validators.required],
    infectiousdisease:['', Validators.required],
    surgicalproblems:['', Validators.required],
    skinulcers:['', Validators.required],
    interpreter:['', Validators.required],
  });

  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
