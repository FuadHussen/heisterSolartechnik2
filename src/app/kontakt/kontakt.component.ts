import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-kontakt',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './kontakt.component.html',
  styleUrl: './kontakt.component.scss'
})
export class KontaktComponent {

  title = 'Kontakt - Heister Solartechnik GmbH';
}
