import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../shared/header/header.component";
import allgemeineFragen from './json/allgemeine-fragen.json';
import installationFragen from './json/installation-faq.json';
import stromspeicherFragen from './json/stromspeicher-faq.json';
import begriffserklaerungenFragen from './json/begriffserklaerungen-faq.json';
import rentabilitaetFragen from './json/rentabilitaet-faq.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type Section = 'allgemeine' | 'installation' | 'stromspeicher' | 'begriffserklaerungen' | 'rentabilitaet';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FontAwesomeModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})

export class FAQComponent {
  pageTitle = 'FAQS';

  allgemeineFragen = allgemeineFragen;
  installationFragen = installationFragen;
  stromspeicherFragen = stromspeicherFragen;
  begriffserklaerungenFragen = begriffserklaerungenFragen;
  rentabilitaetFragen = rentabilitaetFragen;

  activeIndex = {
    allgemeine: 0,
    installation: 0,
    stromspeicher: 0,
    begriffserklaerungen: 0,
    rentabilitaet: 0
  };

  faPlus = faPlus;
  faMinus = faMinus;

  toggle(section: Section, index: number) {
    this.activeIndex[section] = this.activeIndex[section] === index ? -1 : index;
  }
}
