import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RadioOption } from 'src/app/interfaces/radio-option';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() options!: RadioOption[];
}
