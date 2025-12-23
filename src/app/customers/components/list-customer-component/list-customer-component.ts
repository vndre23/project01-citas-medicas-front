import { Component, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialog } from 'primeng/confirmdialog';
@Component({
  selector: 'list-customer-component',
  imports: [TableModule, ButtonModule, ConfirmDialog],
  templateUrl: './list-customer-component.html',
  styleUrl: './list-customer-component.css',
  providers: [ConfirmationService]
})
export class ListCustomerComponent {

  constructor(private confirmationService:ConfirmationService) {}
  data = input<any>();

  clickedUpdate = output();
  onClickUpdate(data:any) {
    this.clickedUpdate.emit(data);
  }

  clickedAcceptDelete = output();
  onClickDelete(data:any) {
    this.clickedAcceptDelete.emit(data);
  }

  confirm2(event: Event, data: any) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: `¿Seguro de eliminar al cliente ${data.name}?`,
            header: 'Eliminar Cliente',
            icon: 'pi pi-info-circle',
            rejectLabel: 'Cancel',
            rejectButtonProps: {
                label: 'Cancelar',
                severity: 'secondary',
                outlined: true,
            },
            acceptButtonProps: {
                label: 'Eliminar',
                severity: 'danger',
            },

            accept: () => {
                // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
                this.onClickDelete(data);
            },
            reject: () => {
                // this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            },
        });
    }
}
