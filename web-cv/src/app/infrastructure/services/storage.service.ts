import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  getPhoto(fileName: string) {
    const photoUrl = new Promise<string>((resolve) => {
      this.storage
        .ref(`${fileName}`)
        .getDownloadURL()
        .subscribe((data) => resolve(data));
    });

    return photoUrl;
  }
}
