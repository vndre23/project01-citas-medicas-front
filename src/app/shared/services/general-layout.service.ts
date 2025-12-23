import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class GeneralLayoutService {
  sidebarOpen = true;      // desktop
  drawerVisible = false;   // mobile

  toggle() {
    if (window.innerWidth < 768) {
      // mobile
      this.drawerVisible = !this.drawerVisible;
    } else {
      // desktop
      this.sidebarOpen = !this.sidebarOpen;
    }
  }

  closeMobile() {
    this.drawerVisible = false;
  }
}
