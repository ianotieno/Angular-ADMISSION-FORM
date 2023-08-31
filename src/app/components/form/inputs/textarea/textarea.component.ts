import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  @Input() placeHolder!: string;
}
