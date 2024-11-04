import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapLocationDot, faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [HeaderComponent, FontAwesomeModule, ContactFormComponent, HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

  title = 'Kontakt - Heister Solartechnik GmbH';

  faMapLocationDot = faMapLocationDot;
  faEnvelopeOpenText = faEnvelopeOpenText;
  faPhone = faPhone;

  contactForm: FormGroup;

  successMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefonnummer: ['', Validators.required],
      adresse: [''],
      nachricht: ['', Validators.required],
      subject: [''],
      preferredContactMethod: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.http.post('http://localhost:3000/send-email', this.contactForm.value)
        .subscribe(
          response => {
            this.successMessage = 'Ihre Nachricht wurde erfolgreich gesendet!';
          },
          error => {
            console.error('Error sending email', error);
          }
        );
    }
  }
}
