import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../../../shared/header/header.component';
import { ContactComponent } from './../../contact/contact.component';
import { ContactFormComponent } from './../../../contact-form/contact-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dachdecker',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ContactComponent, ContactFormComponent, HttpClientModule],
  templateUrl: './dachdecker.component.html',
  styleUrl: './dachdecker.component.scss'
})
export class DachdeckerComponent {
  showSpacer = false;
  customImage = 'assets/jobs/dachdecker.jpg';
  @Input() title = 'Dachdecker für Solartechnik in Vollzeit (m/w/d)';

  @Input() description: string[] = [
    'Du bist gelernter Dachdecker, oder hast reichlich Erfahrung in der Montage von PV-Modulen.',
    'Du verfügst über gute Deutschkenntnisse',
    'Du bist fit, gut in dem was du tust, denkst mit und wirst von deinen Kollegen geschätzt.'
  ];
}
