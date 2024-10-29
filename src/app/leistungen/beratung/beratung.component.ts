import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-beratung',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beratung.component.html',
  styleUrl: './beratung.component.scss'
})
export class BeratungComponent {

  constructor(private sanitizer: DomSanitizer) { }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  description = [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="__lottie_element_13">
          <rect width="200" height="200" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#__lottie_element_13)">
        <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,8,8)">
            <path fill="rgb(255,255,255)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
          </g>
        </g>
        <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgba(90,90,90)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
          </g>
        </g>
      </g>
    </svg>`,
      description: '<strong>Persönliche Beratung:</strong> Wir kommen zu Ihnen, um Ihre Bedürfnisse zu verstehen und die Gegebenheiten vor Ort zu analysieren.'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="__lottie_element_13">
          <rect width="200" height="200" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#__lottie_element_13)">
        <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,8,8)">
            <path fill="rgb(255,255,255)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
          </g>
        </g>
        <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgba(90,90,90)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
          </g>
        </g>
      </g>
    </svg>`,
      description: '<strong>Maßgeschneiderte Lösungen:</strong> Basierend auf unserer Analyse erstellen wir individuelle Lösungsvorschläge und planen die optimale Systemkonfiguration für Ihr Zuhause.'
    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="__lottie_element_13">
          <rect width="200" height="200" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clip-path="url(#__lottie_element_13)">
        <g transform="matrix(9.283329963684082,0,0,9.283329963684082,25.733360290527344,25.733360290527344)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,8,8)">
            <path fill="rgb(255,255,255)" fill-opacity="1" d="M0,-7.5 C-4.140999794006348,-7.5 -7.5,-4.140999794006348 -7.5,0 C-7.5,4.140999794006348 -4.140999794006348,7.5 0,7.5 C4.140999794006348,7.5 7.5,4.140999794006348 7.5,0 C7.5,-4.140999794006348 4.140999794006348,-7.5 0,-7.5z"></path>
          </g>
        </g>
        <g transform="matrix(0.6735799908638,0,0,0.6735799908638,100,100)" opacity="1" style="display: block">
          <g opacity="1" transform="matrix(1,0,0,1,-2.5,-0.75)">
            <path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="4" stroke="rgba(90,90,90)" stroke-opacity="1" stroke-width="20" d="M-62.55699920654297,-7.073999881744385 C-62.55699920654297,-7.073999881744385 -18.54199981689453,38.05799865722656 -18.54199981689453,38.05799865722656 C-18.54199981689453,38.05799865722656 64.03900146484375,-43.70199966430664 67.74600219726562,-47.37300109863281"></path>
          </g>
        </g>
      </g>
    </svg>`,
      description: '<strong>Transparentes Angebot:</strong> Sie erhalten von uns ein kostenloses, unverbindliches Angebot. Dieses beinhaltet einen detaillierten Kostenvoranschlag und eine Amortisationsberechnung, damit Sie genau wissen, wann sich Ihre Investition auszahlt.'
    }
  ];
}
