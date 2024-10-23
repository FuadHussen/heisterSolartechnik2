import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-vertrauenswuerdiger-partner',
  standalone: true,
  imports: [],
  templateUrl: './vertrauenswuerdiger-partner.component.html',
  styleUrl: './vertrauenswuerdiger-partner.component.scss'
})
export class VertrauenswuerdigerPartnerComponent {
  isAnimated: boolean = false; // Initialer Status

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const h1Element = document.querySelector('h1'); // Das h1-Element auswählen
    if (h1Element) {
      const h1Position = h1Element.getBoundingClientRect().top; // Position des h1-Elements
      const windowHeight = window.innerHeight;

      // Überprüfen, ob das h1-Element sichtbar ist
      if (h1Position < windowHeight && h1Position > 0) {
        this.isAnimated = true; // Animation starten
      } else {
        this.isAnimated = false; // Animation zurücksetzen, wenn nicht sichtbar
      }
    }
  }
}
