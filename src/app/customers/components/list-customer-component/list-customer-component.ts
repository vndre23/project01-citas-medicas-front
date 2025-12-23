import { Component, input, output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'list-customer-component',
  imports: [TableModule, ButtonModule],
  templateUrl: './list-customer-component.html',
  styleUrl: './list-customer-component.css',
})
export class ListCustomerComponent {
  data = input<any>();

  clickedUpdate = output();
  onClickUpdate(data:any) {
    this.clickedUpdate.emit(data);
  }
}
