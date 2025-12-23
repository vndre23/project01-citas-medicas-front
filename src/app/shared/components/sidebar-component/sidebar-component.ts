import { Component } from '@angular/core';
import { Drawer } from 'primeng/drawer';
import { GeneralLayoutService } from '../../services/general-layout.service';
import { MenuSidebar } from "../menu-sidebar/menu-sidebar";

@Component({
  selector: 'sidebar-component',
  imports: [Drawer, MenuSidebar],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css',
})
export class SidebarComponent {

  constructor(public layout: GeneralLayoutService) {}
}
