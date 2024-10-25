import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from "./footer/footer.component";
import { VertrauenswuerdigerPartnerComponent } from "./landing-page/vertrauenswuerdiger-partner/vertrauenswuerdiger-partner.component";
import { WirKoennenHelfenComponent } from './landing-page/wir-koennen-helfen/wir-koennen-helfen.component';
import { WarumHeisterComponent } from './landing-page/warum-heister/warum-heister.component';
import { UnserSolarComponent } from './landing-page/unser-solar/unser-solar.component';
import { RechnerComponent } from './landing-page/rechner/rechner.component';
import { FunktionPVComponent } from './landing-page/funktion-pv/funktion-pv.component';
import { QualitaetComponent } from './landing-page/qualitaet/qualitaet.component';
import { StellenanzeigeComponent } from './landing-page/stellenanzeige/stellenanzeige.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LandingPageComponent,
    FooterComponent,
    VertrauenswuerdigerPartnerComponent,
    WirKoennenHelfenComponent,
    WarumHeisterComponent,
    UnserSolarComponent,
    RechnerComponent,
    FunktionPVComponent,
    QualitaetComponent,
    StellenanzeigeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'heisterSolartechnik';
}
