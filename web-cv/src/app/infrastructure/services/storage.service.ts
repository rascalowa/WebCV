import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: AngularFireStorage) {}

  getPhoto(fileName: string, path: string = '') {
    const photoUrl = new Promise<string>((resolve) => {
      this.storage
        .ref(`${path}${fileName}`)
        .getDownloadURL()
        .subscribe((data) => resolve(data));
    });

    return photoUrl;
  }
}
