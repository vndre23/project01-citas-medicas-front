import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { isInvalid } from '../../../utils/form-utils';
@Component({
  selector: 'form-customer-component',
  imports: [InputTextModule, SelectModule, ReactiveFormsModule],
  templateUrl: './form-customer-component.html',
  styleUrl: './form-customer-component.css',
})
export class FormCustomerComponent {
  form = input.required<FormGroup>();
  isInvalid = isInvalid;
}
