import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormContent } from 'src/app/interfaces/form-content';

@Component({
  selector: 'app-admission-assesment-form',
  templateUrl: './admission-assesment-form.component.html',
  styleUrls: ['./admission-assesment-form.component.css']
})
export class AdmissionAssesmentFormComponent {
  constructor(private formBuilder: FormBuilder) { }

  formContents: Array<FormContent> = [
    { type: 'sectionTitle', title: 'ENSURE ALL QUESTIONS ARE COMPLETED', color: '#000000' },
    { type: 'text', name: 'patientName', placeHolder: 'Enter patient name', label: 'Patient Name?' },
    { type: 'text', name: 'Address', placeHolder: 'Address', label: 'Address' },
    { type: 'text', name: 'Postcode', placeHolder: 'Postcode', label: 'Postcode' },

    { type: 'date', name: 'dob', label: 'Enter a Date :', hint: 'MM/DD/YYYY' },

    { type: 'text', name: 'reaction', placeHolder: 'reaction', label: 'Have you ever had a reaction to:' },
    {
      type: 'radios', name: 'claimpay', label: " Drugs", options: [
        { label: 'Yes', value: 'Drugs', checked: false },
        { label: 'No', value: 'Drugs', checked: true },
      ]
    },
    { type: 'textarea', name: 'details', placeHolder: 'details', label: 'details' },
    {
      type: 'radios', name: 'claimpay', label: "Food ", options: [
        { label: 'Yes', value: 'Food', checked: false },
        { label: 'No', value: 'Food', checked: true },
      ]
    },
    { type: 'textarea', name: 'details', placeHolder: 'details', label: 'details' },

    {
      type: 'radios', name: 'claimpay', label: "Latex:", options: [
        { label: 'Yes', value: 'Latex', checked: false },
        { label: 'No', value: 'Latex', checked: true },
      ]
    },
    { type: 'textarea', name: 'details', placeHolder: 'details', label: 'details' },

    {
      type: 'radios', name: 'claimpay', label: " ", options: [
        { label: 'Other:Yes', value: 'Food', checked: false },
        { label: 'No', value: 'Food', checked: true },
      ]
    },
    { type: 'textarea', name: 'details', placeHolder: 'details', label: 'details' },
    { type: 'sectionTitle', title: 'PHYSICAL DETAILS:', color: '#000000' },

    { type: 'text', name: 'Weight', placeHolder: 'What is your weight:kilograms', label: 'What is your weight:kilograms' },
    { type: 'text', name: 'height', placeHolder: 'What is your height:centimeters', label: 'What is your height:centimeters' },

    { type: 'sectionTitle', title: 'PREVIOUS OPERATIONS:', color: '#000000' },
    {
      type: 'radios', name: 'previousoperations', label: "Have you had any previous operations ", options: [
        { label: 'Yes', value: 'Food', checked: false },
        { label: 'No', value: 'Food', checked: true },
      ]
    },
    { type: 'textarea', name: 'details', placeHolder: 'details', label: 'details' },

    { type: 'sectionTitle', title: 'CARDIAC', color: '#000000' },
    {
      type: 'radios', name: 'heartattack', label: "Have you ever had a heart attack? ", options: [
        { label: 'Yes', value: 'heartattack', checked: false },
        { label: 'No', value: 'heartattack', checked: true },
      ]
    },

    { type: 'date', name: 'dob', label: 'Enter a Date :', hint: 'MM/DD/YYYY' },
    {
      type: 'radios', name: 'heartsurgery', label: "Have you ever had heart surgery? ", options: [
        { label: 'Yes', value: 'heartsurgery', checked: false },
        { label: 'No', value: 'heartsurgery', checked: true },
      ]
    },
    { type: 'date', name: 'dob', label: 'Enter a Date of Birth:', hint: 'MM/DD/YYYY' },

    {
      type: 'radios', name: 'pacemaker', label: "Do you have a pacemaker/internal defibrillator? ", options: [
        { label: 'Yes', value: 'pacemaker', checked: false },
        { label: 'No', value: 'pacemaker', checked: true },
      ]
    },
    {
      type: 'groupedInputs', name: 'pacemaker', label: 'If you have a pacemaker', inputs: [
        { type: 'text', name: 'Make', placeHolder: 'Make', label: 'Make' },
        { type: 'text', name: 'Model', placeHolder: 'Model', label: 'Model' },
        { type: 'text', name: 'Lastchecked', placeHolder: 'Last checked', label: 'Last checked' },
      ]
    },

    {
      type: 'radios', name: 'heartproblems', label: "Do you have any other heart problems? ", options: [
        { label: 'Yes', value: 'heartproblems', checked: false },
        { label: 'No', value: 'heartproblems', checked: true },
      ]
    },
    { type: 'text', name: 'heartproblems', placeHolder: 'If yes, specify:', label: 'If yes, specify:' },

    {
      type: 'radios', name: 'irregularheartbeat', label: "Do you have an irregular heart beat?", options: [
        { label: 'Yes', value: 'irregularheartbeat', checked: false },
        { label: 'No', value: 'irregularheartbeat', checked: true },
      ]
    },

    {
      type: 'radios', name: 'tendencytobleed', label: "Do you have a tendency to bleed, clot or bruise easily?", options: [
        { label: 'Yes', value: 'tendencytobleed', checked: false },
        { label: 'No', value: 'tendencytobleed', checked: true },
      ]
    },

    {
      type: 'radios', name: 'bloodpressure', label: "Have you ever had high blood pressure?", options: [
        { label: 'Yes', value: 'bloodpressure', checked: false },
        { label: 'No', value: 'bloodpressure', checked: true },
      ]
    },

    { type: 'sectionTitle', title: 'RESPIRATORY:', color: '#000000' },
    {
      type: 'radios', name: ' smoking', label: "Do you smoke?", options: [
        { label: 'Yes', value: ' smoking', checked: false },
        { label: 'No', value: ' smoking', checked: true },
      ]
    },

    { type: 'text', name: 'Mobility', placeHolder: 'Any history of smoking:', label: 'Any history of smoking:	' },
    {
      type: 'radios', name: 'Asthma', label: "Do you have Asthma?", options: [
        { label: 'Yes', value: 'Asthma', checked: false },
        { label: 'No', value: 'Asthma', checked: true },
      ]
    },
    {
      type: 'radios', name: 'Bronchitis', label: "Do you have Bronchitis?", options: [
        { label: 'Yes', value: 'Bronchitis', checked: false },
        { label: 'No', value: 'Bronchitis', checked: true },
      ]
    },
    {
      type: 'radios', name: 'Sleepapnea', label: "Do you have Sleep apnea?", options: [
        { label: 'Yes', value: 'Sleepapnea', checked: false },
        { label: 'No', value: 'Sleepapnea', checked: true },
      ]
    },
    {
      type: 'radios', name: 'nebulizer', label: "Do you use a nebulizer, puffer or EPAP/CPAP machine or home Oxygen? (please bring puffers with you)?", options: [
        { label: 'Yes', value: 'nebulizer', checked: false },
        { label: 'No', value: 'nebulizer', checked: true },
      ]
    },
    {
      type: 'checkbox', name: 'Respirations', label: "Respirations", options: [
        { label: 'Regular ', value: 'Respirations', checked: false },
        { label: 'Unlabored', value: 'Respirations', checked: false },
        { label: 'Labored', value: 'Respirations', checked: false },
      ]
    },
    {
      type: 'radios', name: 'Shortnessofbreath', label: "Shortness of breath ?", options: [
        { label: 'Yes', value: 'Shortnessofbreath', checked: false },
        { label: 'No', value: 'Shortnessofbreath', checked: true },
      ]
    },

    { type: 'sectionTitle', title: ' DIABETES :', color: '#000000' },
    {
      type: 'radios', name: 'diabetes', label: "Do you have diabetes?", options: [
        { label: 'Yes', value: 'diabetes', checked: false },
        { label: 'No', value: 'diabetes', checked: true },
      ]
    },
    {
      type: 'checkbox', name: 'diabetes', label: "If yes?", options: [
        { label: 'Type I', value: 'diabetes', checked: false },
        { label: 'Type II', value: 'diabetes', checked: false },
        { label: 'Unsure', value: 'diabetes', checked: false },
      ]
    },
    {
      type: 'checkbox', name: 'diabetes', label: "Controlled by", options: [
        { label: 'Diet', value: 'diabetes', checked: false },
        { label: 'Tablet', value: 'diabetes', checked: false },
        { label: 'Insulin', value: 'diabetes', checked: false },
      ]
    },
    {
      type: 'radios', name: 'diabetes', label: "If you take insulin has your Doctor given you instructions regarding your Diabetic Medication?", options: [
        { label: 'Yes', value: 'diabetes', checked: false },
        { label: 'No', value: 'diabetes', checked: true },

      ]
    },
    { type: 'sectionTitle', title: ' GASTROINTESTINAL :', color: '#000000' },
    {
      type: 'radios', name: 'gastrointestinal', label: "Do you have hiatus hernia/gastrointestinal ulcers?", options: [
        { label: 'Yes', value: 'gastrointestinal', checked: false },
        { label: 'No', value: 'gastrointestinal', checked: true },
      ]
    },
    {
      type: 'radio', name: 'specialdietary', label: "Do you have any special dietary requirements?", options: [
        { label: 'Yes', value: 'specialdietary', checked: false },
        { label: 'No', value: 'specialdietary', checked: true },
      ]
    },

    { type: 'sectionTitle', title: 'MUSCULOSKELETAL / MOBILITY:', color: '#000000' },
    {
      type: 'radios', name: 'Mobility', label: "Mobility is ?", options: [
        { label: 'Normal', value: 'Mobility', checked: false },
        { label: 'Impaired ', value: 'Mobility', checked: true },
      ]
    },
    {
      type: 'radios', name: 'Mobility', label: "Do you use an assistive device :", options: [
        { label: 'Yes', value: 'Mobility', checked: false },
        { label: 'No', value: 'Mobility', checked: true },
      ]
    },
    { type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	' },

    {
      type: 'checkbox', name: 'Mobility', label: "Motor development:", options: [
        { label: 'Head control ', value: 'Mobility', checked: false },
        { label: 'sits ', value: 'Mobility', checked: false },
        { label: 'walks', value: 'Mobility', checked: false },
        { label: 'Hemiparesis', value: 'Mobility', checked: false },
        { label: 'Tremors', value: 'Mobility', checked: false },
      ]
    },
    {
      type: 'checkbox', name: 'Mobility', label: "ADLS:", options: [
        { label: 'Self', value: 'Mobility', checked: false },
        { label: 'Assist', value: 'Mobility', checked: false },
        { label: 'Tota', value: 'Mobility', checked: false },
      ]
    },
    { type: 'text', name: 'Eating', placeHolder: 'Eating:', label: 'Eating' },
    { type: 'text', name: 'Bathing', placeHolder: 'Bathing:', label: 'Bathing:' },
    { type: 'text', name: 'Dressing', placeHolder: 'Dressing:', label: 'Dressing:' },

    { type: 'sectionTitle', title: 'PROSTHESIS / AIDS:', color: '#000000' },
    {
      type: 'radios', name: 'glasses', label: "Do you wear glasses / contact lenses:", options: [
        { label: 'Yes', value: 'glasses', checked: false },
        { label: 'No', value: 'glasses', checked: true },
      ]
    },
    {
      type: 'radios', name: 'HearingAid', label: "Hearing Aid or other hearing appliance:", options: [
        { label: 'Yes', value: 'HearingAid', checked: false },
        { label: 'No', value: 'HearingAid', checked: true },
      ]
    },
    {
      type: 'radios', name: 'Dentures', label: "Dentures/Caps/Crowns/Loose teeth:", options: [
        { label: 'Yes', value: 'Dentures', checked: false },
        { label: 'No', value: 'Dentures', checked: true },
      ]
    },
    {
      type: 'radios', name: 'splints', label: "Do you wear any type of splints:", options: [
        { label: 'Yes', value: 'splints', checked: false },
        { label: 'No', value: 'splints', checked: true },
      ]
    },
    { type: 'sectionTitle', title: 'OTHER:', color: '#000000' },
    {
      type: 'radios', name: 'HepatitisA', label: "Have you ever tested positive to Hepatitis  A,  B  or C, HIV, TB, MRSA, VRE or CRE?:", options: [
        { label: 'Yes', value: 'HepatitisA', checked: false },
        { label: 'No', value: 'HepatitisA', checked: true },
      ]
    },
    { type: 'text', name: 'HepatitisA', placeHolder: 'Please specify', label: 'Please specify:' },
    {
      type: 'radios', name: 'drinkalcohol', label: "Do you drink alcohol?", options: [
        { label: 'Yes', value: 'drinkalcohol', checked: false },
        { label: 'No', value: 'drinkalcohol', checked: true },
      ]
    },
    {
      type: 'radios', name: 'HepatitisA', label: "Have you ever had a stroke:", options: [
        { label: 'Yes', value: 'HepatitisA', checked: false },
        { label: 'No', value: 'HepatitisA', checked: true },
      ]
    },

    { type: 'date', name: 'dob', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },
    {
      type: 'radios', name: 'infectiousdisease', label: "Do you have or have you been exposed to an infectious disease in the past 14 days? (e.g. Chickenpox, Measles:", options: [
        { label: 'Yes', value: 'infectiousdisease', checked: false },
        { label: 'No', value: 'infectiousdisease', checked: true },
      ]
    },
    {
      type: 'radios', name: 'surgicalproblems', label: "Do you have any other medical or surgical problems?(e.g. Epilepsy, Liver, Kidney, Psychiatric):", options: [
        { label: 'Yes', value: 'surgicalproblems', checked: false },
        { label: 'No', value: 'surgicalproblems', checked: true },
      ]
    },

    { type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	' },
    {
      type: 'radios', name: 'surgicalproblems', label: "Have you ever been diagnosed with cancer:", options: [
        { label: 'Yes', value: 'cancer', checked: false },
        { label: 'No', value: 'cancer', checked: true },
      ]
    },

    { type: 'text', name: 'Mobility', placeHolder: 'If yes, please specify the type of cancer:', label: 'If yes, please specify the type of cancer:	' },
    { type: 'date', name: 'dob', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },


    {
      type: 'radios', name: 'skinulcers', label: "Do you currently have any skin wounds, pressure sores or skin ulcers:", options: [
        { label: 'Yes', value: 'skinulcers', checked: false },
        { label: 'No', value: 'skinulcers', checked: true },
      ]
    },
    { type: 'text', name: 'skinulcers', placeHolder: 'If yes, please specify which one:', label: 'If yes, please specify which one:	' },

    {
      type: 'radios', name: 'interpreter', label: "Do you require an interpreter:", options: [
        { label: 'Yes', value: 'interpreter', checked: false },
        { label: 'No', value: 'interpreter', checked: true },
      ]
    },
    { type: 'text', name: 'interpreter', placeHolder: 'If yes Please specify Language', label: 'Please specify Language' },

    {
      type: 'radios', name: 'interpreter', label: "Do you have someone to interpret for you:", options: [
        { label: 'Yes', value: 'interpreter', checked: false },
        { label: 'No', value: 'interpreter', checked: true },
      ]
    },
    { type: 'text', name: 'interpreter', placeHolder: 'If yes Please Enter Name of person:', label: 'If yes Please Enter Name of person' },
    { type: 'text', name: 'interpreter', placeHolder: 'If yes Please Enter Phone number', label: 'If yes Please Enter Phone number' },

    {
      type: 'radios', name: 'bloodthinning', label: "Do you take any blood thinning/arthritis medication?(e.g. Warfarin, Plavix, Asprin) :", options: [
        { label: 'Yes', value: 'bloodthinning', checked: false },
        { label: 'No', value: 'bloodthinning', checked: true },
      ]
    },
    { type: 'text', name: 'bloodthinning', placeHolder: 'If yes Please specify', label: 'If yes Please specify' },

    { type: 'sectionTitle', title: 'NEURO:', color: '#000000' },
    {
      type: 'checkbox', name: 'Sensation', label: "Sensation:", options: [
        { label: 'Intact', value: 'Sensation', checked: false },
        { label: 'Diminished', value: 'Sensation', checked: false },
        { label: 'Absent', value: 'Sensation', checked: false },
      ]
    },
    {
      type: 'checkbox', name: 'Verbalresponse', label: "Verbal response:", options: [
        { label: 'Alert', value: 'Verbalresponse', checked: false },
        { label: 'Confused', value: 'Verbalresponse', checked: false },
        { label: 'Inappropriate', value: 'Verbalresponse', checked: false },
        { label: 'incomprehensible', value: 'Verbalresponse', checked: false },
        { label: 'No response', value: 'Verbalresponse', checked: false },
        { label: 'Aphasia', value: 'Verbalresponse', checked: false },
        { label: 'Non expressive', value: 'Verbalresponse', checked: false },
        { label: 'Receptive', value: 'Verbalresponse', checked: false },
      ]
    },
    {
      type: 'radios', name: 'Memorydeficit', label: "Memory deficit:", options: [
        { label: 'Yes', value: 'Memorydeficit', checked: false },
        { label: 'No', value: 'Memorydeficit', checked: true },
      ]
    },

    {
      type: 'radios', name: 'decisionmaking', label: "Impaired decision making:", options: [
        { label: 'Yes', value: 'decisionmaking', checked: false },
        { label: 'No', value: 'decisionmaking', checked: true },
      ]
    },

    {
      type: 'radios', name: 'Sleepaids', label: "Sleep aids:", options: [
        { label: 'Yes', value: 'Sleepaids', checked: false },
        { label: 'No', value: 'Sleepaids', checked: true },
      ]
    },
    { type: 'text', name: 'Sleepaids', placeHolder: 'If yes Please specify', label: 'If yes Please specify' },

    {
      type: 'radios', name: 'Seizures', label: "Seizures :", options: [
        { label: 'Yes', value: 'Seizures', checked: false },
        { label: 'No', value: 'Seizures', checked: true },
      ]
    },
    { type: 'sectionTitle', title: 'Circulation:', color: '#000000' },
    {
      type: 'checkbox', name: 'whereapplicable', label: "Tick where applicable:", options: [
        { label: 'Arrythmias', value: 'whereapplicable', checked: false },
        { label: 'Hypotensive', value: 'whereapplicable', checked: false },
        { label: 'Hypertensive', value: 'whereapplicable', checked: false },
      ]
    },
    {
      type: 'radios', name: 'Pulse', label: "Pulse:", options: [
        { label: 'Regular', value: 'Pulse', checked: false },
        { label: 'Irregular', value: 'Pulse', checked: true },
      ]
    },
    {
      type: 'checkbox', name: 'Skin', label: "Skin:", options: [
        { label: 'Pale', value: 'Skin', checked: false },
        { label: 'Cyanotic', value: 'Skin', checked: false },
        { label: 'Mottled', value: 'Skin', checked: false },
        { label: 'Warm', value: 'Skin', checked: false },
        { label: 'Cold', value: 'Skin', checked: false },
        { label: 'Dry', value: 'Skin', checked: false },
      ]
    },
    {
      type: 'checkbox', name: 'Edema', label: "Edema:", options: [
        { label: 'Pitting', value: 'Edema', checked: false },
        { label: 'Non-pitting', value: 'Edema', checked: false },
        { label: 'Pulmonary', value: 'Edema', checked: false },
        { label: 'Cerebral', value: 'Edema', checked: false },
        { label: 'Macular', value: 'Edema', checked: false },
      ]
    },
    { type: 'sectionTitle', title: 'Psychosocial', color: '#000000' },
    {
      type: 'radios', name: 'Selfinjurious', label: "Self injurious behavior:", options: [
        { label: 'Yes', value: 'Selfinjurious', checked: false },
        { label: 'No', value: 'Selfinjurious', checked: true },
      ]
    },
    {
      type: 'radios', name: 'Aggressivebehavior', label: "Aggressive behavior:", options: [
        { label: 'Yes', value: 'Aggressivebehavior', checked: false },
        { label: 'No', value: 'Aggressivebehavior', checked: true },
      ]
    },
    { type: 'textarea', name: 'disruptivebehavior', placeHolder: 'Frequency of disruptive behavior', label: 'Frequency of disruptive behavior:' },
    {
      type: 'checkbox', name: 'Behavior', label: "Behavior:", options: [
        { label: 'Calm ', value: 'Behavior', checked: false },
        { label: 'Lethargic ', value: 'Behavior', checked: false },
        { label: 'Angry', value: 'Behavior', checked: false },
        { label: 'Resists care', value: 'Behavior', checked: false },
      ]
    },
    { type: 'textarea', name: 'Behavior', placeHolder: 'Other Behaviors', label: 'Other Behaviors:' },

    {
      type: 'radios', name: 'Delusions', label: "Delusions and/ or hallucinations:", options: [
        { label: 'Yes', value: 'Delusions', checked: false },
        { label: 'No', value: 'Delusions', checked: true },
      ]
    },
    { type: 'sectionTitle', title: 'Medications and treatments', color: '#000000' },
    {
      type: 'radios', name: 'MedicationAndIntendedDoses', label: "Does patient have all the medication and intended doses of the same:", options: [
        { label: 'Yes', value: 'MedicationAndIntendedDoses', checked: false },
        { label: 'No', value: 'MedicationAndIntendedDoses', checked: true },
      ]
    },
    { type: 'textarea', name: 'descripancies', placeHolder: 'Were there any noted descripancies', label: 'Were there any noted descripancies:' },

    {
      type: 'radios', name: 'DiagnosisOrMedication', label: "Are vital signs required related to a diagnosis or medication", options: [
        { label: 'Yes', value: 'DiagnosisOrMedication', checked: false },
        { label: 'No', value: 'DiagnosisOrMedication', checked: true },
      ]
    },
    { type: 'textarea', name: 'MedsAndDosage', placeHolder: 'State the meds and dosage the patient is on', label: 'Were there any noted descripancies:' },

    { type: 'sectionTitle', title: 'CLINICAL NOTES', color: '#000000' },
    { type: 'textarea', name: 'ClinicalNotes', placeHolder: 'Past Medical History', label: 'Past Medical History:' },
    { type: 'textarea', name: 'ClinicalNotes', placeHolder: 'Present Medical history', label: 'Present Medical history:' },
    { type: 'textarea', name: 'ClinicalNotes', placeHolder: 'Socio- economic History', label: 'Socio- economic History:' },
    { type: 'textarea', name: 'ClinicalNotes', placeHolder: 'Investigations on Discharge', label: 'Investigations on Discharge:' },
    { type: 'textarea', name: 'ClinicalNotes', placeHolder: 'Medications', label: 'Medications:' },

    { type: 'sectionTitle', title: 'RN DETAILS', color: '#000000' },
    { type: 'text', name: 'Name', placeHolder: 'RN Name', label: 'RN Name ' },
    { type: 'textarea', name: 'Signature', placeHolder: 'Signature :', label: 'Signature :' },
    { type: 'date', name: 'dob', label: 'Enter a Date:', hint: 'MM/DD/YYYY' },
  ]
  admissionForm = this.formBuilder.group({
    patientName: ['', Validators.required],
    Address: ['', Validators.required],
    Postcode: ['', Validators.required],
    reaction: ['', Validators.required],
    Food: ['', Validators.required],
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
    drinkalcohol: ['', Validators.required],
    infectiousdisease: ['', Validators.required],
    surgicalproblems: ['', Validators.required],
    skinulcers: ['', Validators.required],
    interpreter: ['', Validators.required],
    bloodthinning: ['', Validators.required],
    Sensation: ['', Validators.required],
    Memorydeficit: ['', Validators.required],
    decisionmaking: ['', Validators.required],
    Sleepaids: ['', Validators.required],
    Seizures: ['', Validators.required],
    whereapplicable: ['', Validators.required],
    Pulse: ['', Validators.required],
    Skin: ['', Validators.required],
    Edema: ['', Validators.required],
    Selfinjurious: ['', Validators.required],
    Aggressivebehavior: ['', Validators.required],
    disruptivebehavior: ['', Validators.required],
    Behavior: ['', Validators.required],
    Delusions: ['', Validators.required],
    MedicationAndIntendedDoses: ['', Validators.required],
    descripancies: ['', Validators.required],
    DiagnosisOrMedication: ['', Validators.required],
    MedsAndDosage: ['', Validators.required],
    ClinicalNotes: ['', Validators.required],
    Name: ['', Validators.required],
    Signature: ['', Validators.required],
    claimpay: ['', Validators.required],
    tendencytobleed: ['', Validators.required],
    smoking: ['', Validators.required],
    history: ['', Validators.required],
    bloodpressure: ['', Validators.required],
  });
  onSave() {

  }
}

