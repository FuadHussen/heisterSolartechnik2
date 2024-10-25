import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-wir-koennen-helfen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wir-koennen-helfen.component.html',
  styleUrl: './wir-koennen-helfen.component.scss'
})
export class WirKoennenHelfenComponent {
  services = [
    {
      title: "Photovoltaikanlagen in Köln",
      description: "Von der Planung bis zur Installation - wir bieten maßgeschneiderte Lösungen.",
      buttonText: "Weiterlesen",
      link: "https://heister-solartechnik.de/leistungen/#photovoltaikanlagen"
    },
    {
      title: "Energiespeicherlösungen",
      description: "Nutzen Sie die Sonnenenergie rund um die Uhr und optimieren Sie den Eigenverbrauch mit den besten Batteriespeichersystemen.",
      buttonText: "Weiterlesen",
      link: "https://heister-solartechnik.de/leistungen/#energie"
    },
    {
      title: "Elektrische Mobilität",
      description: "Sie wollen Ihr Elektrofahrzeug mit Sonnenenergie laden? Wir helfen bei der Auswahl der idealen Wallbox.",
      buttonText: "Weiterlesen",
      link: "https://heister-solartechnik.de/leistungen/#elektrische"
    },
    {
      title: "Wärmepumpen",
      description: "Heizen Sie Ihr Zuhause mit der Kraft der Sonne und nutzen Sie die Energie optimal mit unseren maßgeschneiderten Lösungen.",
      buttonText: "Weiterlesen",
      link: "https://heister-solartechnik.de/leistungen/#warmepumpen"
    }
  ];

  isAnimated: boolean = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const servicesElement = document.querySelector('.services');
    if (servicesElement) {
      const servicesPosition = servicesElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (servicesPosition < windowHeight && servicesPosition > 0) {
        this.isAnimated = true; // Wenn im Sichtbereich, Animation starten
      } else {
        this.isAnimated = false; // Wenn nicht im Sichtbereich, Animation stoppen
      }
    }
  }
}
