import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  @Input() heading: string = 'Wir freuen uns dich kennenzulernen! Kontaktiere uns einfach per E-Mail, Telefon oder WhatsApp.';

  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
