import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';import { HeaderComponent } from "../shared/header/header.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapLocationDot, faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, ContactFormComponent, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})

export class KontaktComponent implements AfterViewInit {
  contactForm: FormGroup;
  successMessage: string = '';
  faMapLocationDot = faMapLocationDot;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faPhone = faPhone;
  title = 'Kontakt';

@ViewChild('adresseInput') adresseInput!: ElementRef;

  ngAfterViewInit() {
    const autocomplete = new google.maps.places.Autocomplete(this.adresseInput.nativeElement, {
      types: ['address'],
      componentRestrictions: { country: 'DE' }
    });
  }

  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefonnummer: ['', [Validators.required, Validators.pattern(/^[0-9+\-/\s]+$/)]],
      adresse: [''],
      nachricht: ['', Validators.required],
      subject: ['', Validators.required],
      preferredContactMethod: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      const name = this.contactForm.get('name')?.value;
      const subject = this.contactForm.get('subject')?.value;

      const requestData = {
        access_key: '06fbb285-ad22-42fb-83e7-53fffe79503b',
        Request: {
          Name: this.contactForm.get('name')?.value,
          PhoneNumber: this.contactForm.get('telefonnummer')?.value,
          Email: this.contactForm.get('email')?.value,
          Address: this.contactForm.get('adresse')?.value,
          Message: this.contactForm.get('nachricht')?.value
        }
      };

      formData.append('json', JSON.stringify(requestData));
      formData.append('subject', `${name}`);
      
      Object.entries(this.contactForm.value).forEach(([key, value]) => {
        if (key !== 'subject') { 
          formData.append(key, value as string);
        }
      });

      formData.append('access_key', '06fbb285-ad22-42fb-83e7-53fffe79503b');

      fetch('https://hook.eu2.make.com/j5jfqrpjlt8zqxuis6pja8rmp976geqe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(response => {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then(data => {
        if (typeof data === 'object' && data.success) {
          this.successMessage = "Ihre Nachricht wurde erfolgreich gesendet.";
          this.contactForm.reset();
        } else if (typeof data === 'string' && data === 'Accepted') {
          this.successMessage = "Ihre Nachricht wurde erfolgreich gesendet.";
          this.contactForm.reset();
        } else {
          this.successMessage = typeof data === 'string' ? data : "Unbekannte Antwort vom Server.";
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.successMessage = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
      });

      // Send email using MailService
      this.mailService.sendEmail(formData)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.successMessage = "Ihre Nachricht wurde erfolgreich gesendet.";
            this.contactForm.reset();
          } else {
            this.successMessage = data.message;
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.successMessage = "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.";
        });
    }
  }
}