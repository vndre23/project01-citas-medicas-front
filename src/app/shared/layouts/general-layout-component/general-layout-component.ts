import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar-component/navbar-component";
import { SidebarComponent } from "../../components/sidebar-component/sidebar-component";
import { MenuSidebar } from "../../components/menu-sidebar/menu-sidebar";

@Component({
  selector: 'app-general-layout-component',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, MenuSidebar],
  templateUrl: './general-layout-component.html',
  styleUrl: './general-layout-component.css',
})
export class GeneralLayoutComponent {

}
