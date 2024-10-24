import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from "./footer/footer.component";
import { VertrauenswuerdigerPartnerComponent } from "./vertrauenswuerdiger-partner/vertrauenswuerdiger-partner.component";
import { WirKoennenHelfenComponent } from './wir-koennen-helfen/wir-koennen-helfen.component';
import { WarumHeisterComponent } from './warum-heister/warum-heister.component';

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
    WarumHeisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'heisterSolartechnik';
}
