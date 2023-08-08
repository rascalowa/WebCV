import { Component } from '@angular/core';
import { StorageService } from '../../../infrastructure/services/storage.service';
import { Dialog } from '@angular/cdk/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { Hobby } from './infrastructure/enums/hobby.enum';
import { HobbyData } from './infrastructure/interfaces/modal-data.interface';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.scss'],
})
export class HobbyComponent {
  travelPhotoUrl: string | undefined;
  kitePhotoUrl: string | undefined;
  horsesPhotoUrl: string | undefined;
  snowboardPhotoUrl: string | undefined;
  hobbiesData: HobbyData[] = [];
  descriptionPlaceholder =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione et praesentium omnis quod temporibus magnam, dolores aut in deserunt quidem rerum hic laborum expedita aperiam totam iusto doloremque eligendi harum iure non accusantium exercitationem doloribus quibusdam illum!';

  constructor(private storageService: StorageService, public dialog: Dialog) {}

  ngOnInit() {
    // loader true;

    let promiseTravel = this.storageService
      .getPhoto('travel-min.jpg')
      .then((url) => {
        this.travelPhotoUrl = url;
      })
      .catch((error) => {
        console.warn(error.message);
      });

    let promiseKite = this.storageService
      .getPhoto('kite-min.JPG')
      .then((url) => {
        this.kitePhotoUrl = url;
      })
      .catch((error) => {
        console.warn(error.message);
      });

    let promiseHorses = this.storageService
      .getPhoto('horses-min.jpg')
      .then((url) => {
        this.horsesPhotoUrl = url;
      })
      .catch((error) => {
        console.warn(error.message);
      });

    let promiseSnowboard = this.storageService
      .getPhoto('snowboard-min.jpg')
      .then((url) => {
        this.snowboardPhotoUrl = url;
      })
      .catch((error) => {
        console.warn(error.message);
      });

    Promise.allSettled([
      promiseTravel,
      promiseKite,
      promiseHorses,
      promiseSnowboard,
    ]).then(
      () =>
        (this.hobbiesData = [
          {
            hobby: Hobby.Travel,
            photoUrl: this.travelPhotoUrl,
            description: this.descriptionPlaceholder,
          },
          {
            hobby: Hobby.Kite,
            photoUrl: this.kitePhotoUrl,
            description: this.descriptionPlaceholder,
          },
          {
            hobby: Hobby.Horses,
            photoUrl: this.horsesPhotoUrl,
            description: this.descriptionPlaceholder,
          },
          {
            hobby: Hobby.Snowboard,
            photoUrl: this.snowboardPhotoUrl,
            description: this.descriptionPlaceholder,
          },
        ])
    );
    // loader false
  }

  openDialog(index: number) {
    this.dialog.open(ModalComponent, {
      maxWidth: '1000px',
      data: this.hobbiesData[index],
    });
  }
}
