import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VertrauenswuerdigerPartnerComponent } from './vertrauenswuerdiger-partner/vertrauenswuerdiger-partner.component';
import { WirKoennenHelfenComponent } from './wir-koennen-helfen/wir-koennen-helfen.component';
import { WarumHeisterComponent } from './warum-heister/warum-heister.component';
import { UnserSolarComponent } from './unser-solar/unser-solar.component';
import { RechnerComponent } from './rechner/rechner.component';
import { FunktionPVComponent } from './funktion-pv/funktion-pv.component';
import { QualitaetComponent } from './qualitaet/qualitaet.component';
import { StellenanzeigeComponent } from './stellenanzeige/stellenanzeige.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    VertrauenswuerdigerPartnerComponent,
    WirKoennenHelfenComponent,
    WarumHeisterComponent,
    UnserSolarComponent,
    RechnerComponent,
    FunktionPVComponent,
    QualitaetComponent,
    StellenanzeigeComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  animateSpacer = false;
  animateText = false;
  animateButtons = false;

  ngOnInit() {
    setTimeout(() => {
      this.animateSpacer = true;
    }, 500); 

    setTimeout(() => {
      this.animateText = true;
    }, 1000); 

    setTimeout(() => {
      this.animateButtons = true;
    }, 1500); 
  }
}