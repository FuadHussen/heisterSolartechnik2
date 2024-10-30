import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DachdeckerComponent } from "../dachdecker/dachdecker.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-elektriker',
  standalone: true,
  imports: [CommonModule, DachdeckerComponent, HttpClientModule],
  templateUrl: './elektriker.component.html',
  styleUrl: './elektriker.component.scss'
})
export class ElektrikerComponent {
  title = 'Elektromeister in Vollzeit (m/w/d)';

  description = [
    'Du bist Elektromeister und hast vorzugsweise Erfahrung in der AC-seitigen Installation, Abnahme und Anmeldung von PV-Anlagen.',
    'Du bist fit, gut in dem was du tust, denkst mit und wirst von deinen Kollegen geschätzt.'
  ];
}
