import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  title = 'Datenschutzerklärung';
}
