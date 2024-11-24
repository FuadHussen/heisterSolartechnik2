import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-wir-koennen-helfen',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wir-koennen-helfen.component.html',
  styleUrl: './wir-koennen-helfen.component.scss'
})
export class WirKoennenHelfenComponent {
  services = [
    {
      title: "Photovoltaikanlagen in Köln",
      description: "Von der Planung bis zur Installation - wir bieten maßgeschneiderte Lösungen.",
      buttonText: "Weiterlesen",
      link: "leistungen#image-1"
    },
    {
      title: "Energiespeicherlösungen",
      description: "Nutzen Sie die Sonnenenergie rund um die Uhr und optimieren Sie den Eigenverbrauch mit den besten Batteriespeichersystemen.",
      buttonText: "Weiterlesen",
      link: "leistungen#image-2"
    },
    {
      title: "Elektrische Mobilität",
      description: "Sie wollen Ihr Elektrofahrzeug mit Sonnenenergie laden? Wir helfen bei der Auswahl der idealen Wallbox.",
      buttonText: "Weiterlesen",
      link: "leistungen#image-3"
    },
    {
      title: "Wärmepumpen",
      description: "Heizen Sie Ihr Zuhause mit der Kraft der Sonne und nutzen Sie die Energie optimal mit unseren maßgeschneiderten Lösungen.",
      buttonText: "Weiterlesen",
      link: "leistungen#image-4"
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
        this.isAnimated = true; 
      } else {
        this.isAnimated = false; 
      }
    }
  }

  getFragment(link: string): string {
    return link.split('#')[1];
  }
}
