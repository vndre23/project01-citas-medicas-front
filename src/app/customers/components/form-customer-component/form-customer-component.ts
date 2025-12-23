import { Component, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { isInvalid } from '../../../utils/form-utils';
import { rxResource } from '@angular/core/rxjs-interop';
import { TypeDocumentService } from '../../../services/type-document.service';
import { TypeDocument } from '../../../interfaces/customer.interface';
@Component({
  selector: 'form-customer-component',
  imports: [InputTextModule, SelectModule, ReactiveFormsModule],
  templateUrl: './form-customer-component.html',
  styleUrl: './form-customer-component.css',
})
export class FormCustomerComponent {
  form = input.required<FormGroup>();
  isInvalid = isInvalid;
  typeDocumentService = inject(TypeDocumentService);

  typeDocumentResource = rxResource({
    params: () => ({}),
    stream:({params}) => {
      return this.typeDocumentService.getAllDocuments();
    }
  });


}
