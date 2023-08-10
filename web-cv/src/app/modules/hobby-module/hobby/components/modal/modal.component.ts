import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { HobbyData } from '../../infrastructure/interfaces/modal-data.interface';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(@Inject(DIALOG_DATA) public data: HobbyData) {}
}
