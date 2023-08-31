import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.css']
})
export class FormTitleComponent {
  @Input() title!: string;
  @Input() color: string = 'grey';
}
