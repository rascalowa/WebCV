import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/infrastructure/services/local-storage.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, AfterViewInit, OnDestroy {
  contactForm: FormGroup;
  interval: number = 0;
  url = 'https://formspree.io/monikastanko90@gmail.com';

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: ['', { nonNullable: true }],
      message: ['', { nonNullable: true }],
    });
  }

  ngOnInit() {
    this.autoFillHandler();
  }

  ngAfterViewInit() {
    this.autoSaveHandler();
  }

  autoFillHandler() {
    let savedForm = this.localStorage.getItem('contactFormData');

    if (savedForm) {
      this.contactForm.patchValue({
        name: savedForm.name,
        email: savedForm.email,
        message: savedForm.message,
      });
    }
  }

  autoSaveHandler() {
    this.interval = window.setInterval(() => {
      let savedForm = this.localStorage.getItem('contactFormData');

      if (savedForm !== this.contactForm.value && this.contactForm.touched) {
        this.localStorage.setItem('contactFormData', this.contactForm.value);
      }
    }, 60000);
  }

  onSubmit() {
    let url = 'https://formspree.io/f/xeqbeykr';
    let data = `name=${this.contactForm.value.name}&email=${this.contactForm.value.email}&message=${this.contactForm.value.message}`;
    let errorMessage: string = '';

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: (data) => {
        this.contactForm.reset();
        this.localStorage.removeItem('contactFormData');
      },
      error: (error) => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      },
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
