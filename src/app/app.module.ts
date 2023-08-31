import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DischargeFormComponent } from './components/discharge-form/discharge-form.component';
import { HeaderComponent } from './components/header/header.component';
import { TextComponent } from './components/form/inputs/text/text.component';
import { TextareaComponent } from './components/form/inputs/textarea/textarea.component';
import { RadiosComponent } from './components/form/inputs/radios/radios.component';
import { DateRangeComponent } from './components/form/inputs/date-range/date-range.component';
import { GroupedInputsComponent } from './components/form/inputs/grouped-inputs/grouped-inputs.component';
import { InputsComponent } from './components/form/inputs/inputs.component';
import { AdmissionFormComponent } from './components/admission-form/admission-form.component';
import { FormComponent } from './components/form/form.component';
import { FormTitleComponent } from './components/form/title/form-title.component';
import { CheckboxComponent } from './components/form/inputs/checkbox/checkbox.component';
@NgModule({
  declarations: [
    AppComponent,
    DischargeFormComponent,
    HeaderComponent,
    TextComponent,
    TextareaComponent,
    RadiosComponent,
    DateRangeComponent,
    GroupedInputsComponent,
    InputsComponent,
    AdmissionFormComponent,
    FormComponent,
    FormTitleComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
