import { Injectable } from '@angular/core';
import { ContactData } from '../interfaces/contact-form.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, value: any): void {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  }

  getItem(key: string): ContactData {
    let data = localStorage.getItem(`${key}`);
    console.log(data);
    return data ? JSON.parse(data) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(`${key}`);
  }
}
