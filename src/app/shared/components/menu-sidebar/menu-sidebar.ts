import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
@Component({
  selector: 'menu-sidebar',
  imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass],
  templateUrl: './menu-sidebar.html',
  styleUrl: './menu-sidebar.css',
})
export class MenuSidebar {

}
