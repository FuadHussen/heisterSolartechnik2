import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
}
