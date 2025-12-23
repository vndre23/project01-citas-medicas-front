import { Component, inject } from '@angular/core';
import { ContainerListComponent } from "../../../shared/components/container-list-component/container-list-component";
import { ListCustomerComponent } from "../../components/list-customer-component/list-customer-component";
import { CustomerRequest, CustomerResponse } from '../../../interfaces/customer.interface';
import { ContainerListModalService } from '../../../shared/services/container-list-modal.service';
import { CustomerService } from '../../../services/customer.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormCustomerComponent } from "../../components/form-customer-component/form-customer-component";

@Component({
  selector: 'app-list-customer-page',
  imports: [ContainerListComponent, ListCustomerComponent, Dialog, ReactiveFormsModule, FormCustomerComponent, ButtonModule],
  templateUrl: './list-customer-page.html',
  styleUrl: './list-customer-page.css',
})
export class ListCustomerPage {

  constructor(public modalDialogService: ContainerListModalService){}

  customerService = inject(CustomerService);

  fb = inject(FormBuilder);
  customerForm = this.fb.group({
    id: [''],
    typeDocument:[{}],
    numberDocument: ['', Validators.required],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
  });

  customerResource = rxResource({
    params: () => ({}),
    stream:({params}) => {
      return this.customerService.getAllClients();
    }
  });



  toggleCreate() {
    this.modalDialogService.toggleModal();
  }

  toggleUpdate(data:any) {
    console.log(data);
    this.customerForm.patchValue(data);
    this.modalDialogService.toggleModal();
  }

  save() {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    if (!this.customerForm.value.id) {

      this.customerService.saveClient(this.customerForm.value)
        .subscribe({
          next: () => {
            this.modalDialogService.toggleModal();
            this.customerResource.reload();
          },
          error: err => {
            console.error('Error al guardar cliente', err);
          }
      });
    } else {
      this.customerService.updateClient(this.customerForm.value, this.customerForm.value.id)
        .subscribe({
          next: () => {
            this.modalDialogService.toggleModal();
            this.customerResource.reload();
          },
          error: err => {
            console.error('Error al guardar cliente', err);
          }
      });
    }
    console.log(this.customerForm.value);

  }

  onDialogHide() {
    this.customerForm.reset({
      typeDocument: null,
      numberDocument: '',
      name: '',
      lastname: '',
    });
  }

  closeDialog() {
    this.customerForm.reset();
    this.modalDialogService.toggleModal();
  }
}
