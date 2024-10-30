import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { JobsComponent } from './jobs/jobs.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-karriere',
  standalone: true,
  imports: [HeaderComponent, JobsComponent, ContactComponent],
  templateUrl: './karriere.component.html',
  styleUrl: './karriere.component.scss'
})
export class KarriereComponent {
  pageTitle = 'Karriere';

}
