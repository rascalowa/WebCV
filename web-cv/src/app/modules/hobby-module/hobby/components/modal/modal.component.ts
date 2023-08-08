import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { HobbyData } from '../../infrastructure/interfaces/modal-data.interface';
import { Hobby } from '../../infrastructure/enums/hobby.enum';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  allHobby = Hobby;

  constructor(@Inject(DIALOG_DATA) public data: HobbyData) {}
}
