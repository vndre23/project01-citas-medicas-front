import { Component, input, output } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'container-list-component',
  imports: [PanelModule, FieldsetModule, ButtonModule],
  templateUrl: './container-list-component.html',
  styleUrl: './container-list-component.css',
})
export class ContainerListComponent {
  title = input<string>();
  nameTable = input<string>();
  clickCreate = output();
  onClickCreate() {
    this.clickCreate.emit();
  }

  visible: boolean = false;

}
