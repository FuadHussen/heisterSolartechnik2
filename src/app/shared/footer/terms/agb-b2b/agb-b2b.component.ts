import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";

@Component({
  selector: 'app-agb-b2b',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './agb-b2b.component.html',
  styleUrl: './agb-b2b.component.scss'
})
export class AgbB2bComponent {

  title = 'AGB Heister Solartechnik GmbH B2B';
}
