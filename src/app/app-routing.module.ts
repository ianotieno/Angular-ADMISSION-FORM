import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DischargeFormComponent } from './components/discharge-form/discharge-form.component';
import { AdmissionFormComponent } from './components/admission-form/admission-form.component';

const routes: Routes = [
  { path: '', component: DischargeFormComponent },
  { path: 'discharge-form', component: DischargeFormComponent },
  { path: 'admission-form', component: AdmissionFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
