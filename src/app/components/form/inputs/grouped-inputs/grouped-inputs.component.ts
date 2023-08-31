import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextContent } from 'src/app/interfaces/text-content';

@Component({
  selector: 'app-grouped-inputs',
  templateUrl: './grouped-inputs.component.html',
  styleUrls: ['./grouped-inputs.component.css']
})
export class GroupedInputsComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() inputs!: TextContent[];
}
