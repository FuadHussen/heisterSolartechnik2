import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';
import { LeistungenComponent } from './leistungen/leistungen.component';
import { FAQComponent } from './faq/faq.component';
import { KarriereComponent } from './karriere/karriere.component';
import { DachdeckerComponent } from './karriere/jobs/dachdecker/dachdecker.component';
import { ElektrikerComponent } from './karriere/jobs/elektriker/elektriker.component';
import { ChefComponent } from './karriere/jobs/chef/chef.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImprintComponent } from './shared/footer/terms/imprint/imprint.component';
import { PrivacyPolicyComponent } from './shared/footer/terms/privacy-policy/privacy-policy.component';
import { AgbB2bComponent } from './shared/footer/terms/agb-b2b/agb-b2b.component';
import { AgbB2cComponent } from './shared/footer/terms/agb-b2c/agb-b2c.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'ueber-uns', component: UeberUnsComponent },
  { path: 'leistungen', component: LeistungenComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'karriere', component: KarriereComponent },
  { path: 'dachdecker', component: DachdeckerComponent },
  { path: 'elektriker', component: ElektrikerComponent },
  { path: 'chef', component: ChefComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'datenschutz', component: PrivacyPolicyComponent },
  { path: 'agb-b2b', component: AgbB2bComponent },
  { path: 'agb-b2c', component: AgbB2cComponent }
];
