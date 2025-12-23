import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { GeneralLayoutService } from '../../services/general-layout.service';
@Component({
  selector: 'navbar-component',
  imports: [ToolbarModule, AvatarModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  constructor(private layout: GeneralLayoutService) {}

  toggleSidebar() {
  this.layout.toggle();
}
}
