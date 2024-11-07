import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailService } from '../services/mail.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  successMessage: string = '';

  title = 'Kontakt';
  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefonnummer: ['', [Validators.required, Validators.pattern(/^[0-9+\-/\s]+$/)]],
      nachricht: ['', Validators.required],
      preferredContactMethod: ['']
    });
  }


  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();

      const name = this.contactForm.get('name')?.value;
      const subject = this.contactForm.get('subject')?.value;

      formData.append('subject', `${name}`);

      Object.entries(this.contactForm.value).forEach(([key, value]) => {
        if (key !== 'subject') {
          formData.append(key, value as string);
        }
      });

      formData.append('access_key', '06fbb285-ad22-42fb-83e7-53fffe79503b');

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