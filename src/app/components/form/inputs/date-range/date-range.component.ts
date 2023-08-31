import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateRangeInput } from 'src/app/interfaces/date-range-input';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() hint!: string;
  @Input() inputs!: DateRangeInput;
}
