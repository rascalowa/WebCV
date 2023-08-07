import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  url = 'https://formspree.io/monikastanko90@gmail.com';

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {
    this.contactForm = this.formBuilder.group({
      name: [''],
      email: ['', { nonNullable: true }],
      message: ['', { nonNullable: true }],
    });
  }

  // TO DO: Notification - Email successfully sent
  // TO DO: Red borders or error messages for incorrect fields

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
        console.log('email sent' + JSON.stringify(data));
        this.contactForm.reset();
      },
      error: (error) => {
        errorMessage = error.message;
        console.log('error!', errorMessage);
      },
    });
  }
}
