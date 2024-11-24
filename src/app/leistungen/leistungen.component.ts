import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HeaderComponent } from "../shared/header/header.component";
import { VorgehensweiseComponent } from "./vorgehensweise/vorgehensweise.component";
import { BeratungComponent } from "./beratung/beratung.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leistungen',
  standalone: true,
  imports: [CommonModule, HeaderComponent, VorgehensweiseComponent, BeratungComponent],
  templateUrl: './leistungen.component.html',
  styleUrl: './leistungen.component.scss'
})
export class LeistungenComponent implements AfterViewInit {
  
  defaultTitle = 'Unsere Dienstleistungen - Ihr Weg zur Sonnenenergie';

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    const items = document.querySelectorAll('li');
    items.forEach(item => observer.observe(item));

    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          }
        }, 100);
      }
    });
  }

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  item01 = {
    "title": "Photovoltaikanlagen: Sonnenenergie Optimal Nutzen",
    "descriptions": [
      "<strong>Planung und Installation:</strong> Wir bieten maßgeschneiderte Photovoltaikanlagen für Wohn- und Gewerbeimmobilien, die sich perfekt in Ihre Umgebung integrieren.",
      "<strong>Individuelle Systemkonzepte:</strong> Jeder Kunde und jedes Gebäude ist einzigartig. Daher entwickeln wir Systemkonzepte, die genau auf Ihre Bedürfnisse und Gegebenheiten zugeschnitten sind.",
      "<strong>Rentabilitätsberechnung:</strong> Wir zeigen Ihnen transparent auf, wie sich Ihre Investition in eine Photovoltaikanlage finanziell für Sie auszahlt.",
      "<strong>Überwachungssysteme:</strong> Mit unseren modernen Apps und Web-Oberflächen behalten Sie stets den Überblick über die Leistung Ihrer Anlage und können den Eigenverbrauch optimal steuern."
    ],
    "imageUrl": "./assets/leistungen/01sp.jpg",
    "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="200" height="200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_13)">
              <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,8,8)">
                  <path fill="rgb(0,0,0)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
                </g>
              </g>
              <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
                  <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
                </g>
              </g>
            </g>
          </svg>`,
    "reverse": true
  };

  item02 = {
    "title": "Energiespeicherlösungen: Sonnenenergie rund um die Uhr",
    "descriptions": [
      "<strong>Optimierung des Eigenverbrauchs:</strong> Mit unseren Batteriespeichersystemen nutzen Sie die Energie Ihrer Photovoltaikanlage auch dann, wenn die Sonne nicht scheint.",
      "<strong>Individuelle Beratung:</strong> Wir helfen Ihnen, die passende Batteriegröße und -technologie für Ihre Bedürfnisse zu finden."
    ],
    "imageUrl": "./assets/leistungen/man-worker-firld-by-solar-panels1.jpg",
    "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="200" height="200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_13)">
              <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,8,8)">
                  <path fill="rgb(0,0,0)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
                </g>
              </g>
              <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
                  <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
                </g>
              </g>
            </g>
          </svg>`,
    "reverse": false
  };

  item03 = {
    "title": "Elektrische Mobilität: Laden mit Sonnenkraft",
    "descriptions": [
      "<strong>Wandladestationen für Ihr Zuhause:</strong> Wir beraten Sie bei der Auswahl und Installation der passenden Wallbox für Ihr Elektrofahrzeug.",
      "<strong>Intelligentes Lastmanagement:</strong> Unsere Systeme sorgen dafür, dass Ihr Fahrzeug bevorzugt mit überschüssiger Solarenergie geladen werden kann."
    ],
    "imageUrl": "./assets/leistungen/close-up-electric-car-france1.jpg",
    "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="200" height="200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_13)">
              <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,8,8)">
                  <path fill="rgb(0,0,0)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
                </g>
              </g>
              <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
                  <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
                </g>
              </g>
            </g>
          </svg>`,
    "reverse": true
  };

  item04 = {
    "title": "Wärmepumpen: Heizen mit der Kraft der Sonne (ab Anfang nächsten Jahres)",
    "descriptions": [
      "<strong>Umweltfreundliche Heizlösungen:</strong> Mit unseren Wärmepumpen nutzen Sie die Energie der Sonne, um Ihr Zuhause zu heizen und mit Warmwasser zu versorgen.",
      "<strong>Maßgeschneiderte Lösungen:</strong> Wir beraten Sie bei der Auswahl der passenden Wärmepumpentechnologie und sorgen für eine nahtlose Integration in Ihr Energiekonzept.",
      "<strong>Intelligentes Lastmanagement:</strong> Unsere Wärmepumpen arbeiten Hand in Hand mit Ihrer Photovoltaikanlage, um die Sonnenenergie optimal zu nutzen."
    ],
    "imageUrl": "./assets/leistungen/close-up-heat-pump-outside-home1.jpg",
    "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="200" height="200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_13)">
              <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,8,8)">
                  <path fill="rgb(0,0,0)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
                </g>
              </g>
              <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
                  <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
                </g>
              </g>
            </g>
          </svg>`,
    "reverse": false
  };

  item05 = {
    "title": "SIGENERGY: Die Zukunft der Energieversorgung",
    "descriptions": [
      "<strong>Einfache Installation:</strong> Schnelle und unkomplizierte Nachrüstbarkeit für bestehende Systeme.",
      "<strong>Intelligente Software:</strong> KI-unterstützte Steuerung inklusive dynamischem Stromhandel und benutzerfreundlicher App.",
      "<strong>Leistungsstarke Hardware:</strong> Optimierte Ausgangsleistung (bis zu 20 kW bei einem 10 kW-Wechselrichter) und innovatives Sicherheitssystem.",
      "<strong>Sofortige Stromversorgung bei Ausfall:</strong> Patentierte Gateway-Technologie mit 0 ms Umschaltzeit bei Stromausfällen – einzigartig auf dem Markt."
    ],
    "imageUrl": "./assets/leistungen/Sigen-Gateway-C120-6-Left.png",
    "svg": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <clipPath id="__lottie_element_13">
                <rect width="200" height="200" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_13)">
              <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,8,8)">
                  <path fill="rgb(0,0,0)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
                </g>
              </g>
              <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
                <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
                  <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgb(255,255,255)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
                </g>
              </g>
            </g>
          </svg>`,
    "reverse": true
  };
}