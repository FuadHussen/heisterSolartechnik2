import { Component } from '@angular/core';
import { HeaderComponent } from '../../../header/header.component';

@Component({
  selector: 'app-agb-b2c',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './agb-b2c.component.html',
  styleUrl: './agb-b2c.component.scss'
})
export class AgbB2cComponent {

  title = 'AGB Heister Solartechnik GmbH B2C';
}