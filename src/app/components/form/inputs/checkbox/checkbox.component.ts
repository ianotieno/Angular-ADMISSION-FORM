import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RadioOption } from 'src/app/interfaces/radio-option';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() name!: string;
  @Input() label!: string;
  @Input() alignment!:'vertical' | 'horizontal';
  @Input() options!: RadioOption[];

  checkboxGroup!: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.checkboxGroup = this.formBuilder.group({
      options: this.formBuilder.array(this.options.map(opt => opt.checked))
    });
    this.form.addControl(this.name, this.checkboxGroup);
  }
}
