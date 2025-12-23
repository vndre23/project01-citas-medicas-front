import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ContainerListModalService {
  modalVisible = false;

  open() {
    this.modalVisible = true;
  }

  close() {
    this.modalVisible = false;
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }
}
