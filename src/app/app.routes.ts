import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UeberUnsComponent } from './ueber-uns/ueber-uns.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, 
  { path: 'ueber-uns', component: UeberUnsComponent }
];
