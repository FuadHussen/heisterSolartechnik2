import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stellenanzeige',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stellenanzeige.component.html',
  styleUrl: './stellenanzeige.component.scss'
})
export class StellenanzeigeComponent {
  stellenanzeige = {
    title: "Werde Teil des Heister Solartechnik-Teams!",
    description: "Du suchst ein Unternehmen, bei dem die Kunden und Mitarbeiter an erster Stelle stehen? Ein Unternehmen, dem dein Wohlbefinden wichtig ist? Dich am Erfolg teilhaben lässt? Dann bist du bei uns genau richtig!",
    buttonText: "Stellenanzeigen",
  };

  isAnimated: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const element = document.querySelector('.stellenanzeige-container') as HTMLElement;
    if (element) {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight && position > 0) {
        this.isAnimated = true;
      }

      const scrollPosition = (window.scrollY - element.offsetTop) * 0.5; 
      element.style.setProperty('--scroll-position', `${scrollPosition}px`);
    }
  }
}
