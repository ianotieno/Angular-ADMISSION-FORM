import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmissionFormComponent } from './components/admission-form/admission-form.component';
import { AdmissionAssesmentFormComponent } from './components/admission-assesment-form/admission-assesment-form.component';

const routes: Routes = [
  { path: '', component: AdmissionFormComponent },
  { path: 'admission-assessment-form', component: AdmissionAssesmentFormComponent},
  { path: 'admission-form', component: AdmissionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
