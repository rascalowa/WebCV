import { ChangeDetectorRef, Component } from '@angular/core';
import { StorageService } from '../../infrastructure/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mainPhoto: string | undefined;

  constructor(
    private storageService: StorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.storageService
      .getMainPhoto('MonChee.jpg')
      .then((url) => {
        this.mainPhoto = url;
        this.cdr.detectChanges();
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
}
