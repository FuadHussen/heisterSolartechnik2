import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './../../../shared/header/header.component';
import { ContactComponent } from './../../contact/contact.component';
import { ContactFormComponent } from './../../../contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContactComponent, ContactFormComponent, HttpClientModule, RouterModule],
  templateUrl: './chef.component.html',
  styleUrl: './chef.component.scss'
})
export class ChefComponent {
  title = 'Assistenz der Geschäftsführung (m/w/d)';
  customImage = 'assets/jobs/chef.jpg';
  showSpacer = false;
}
