import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-qualitaet',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './qualitaet.component.html',
  styleUrl: './qualitaet.component.scss'
})
export class QualitaetComponent {
  quality = {
    title: "Qualität und Integrität",
    description: "In einer Welt, die von kurzfristigen Gewinnen und Trends geprägt ist, stellen wir Beständigkeit in den Vordergrund. Unsere Vision ist es echte Werte für Sie zu schaffen und Langlebigkeit in den Mittelpunkt zu stellen. Für uns ist Qualität nicht nur ein Versprechen der Produktlebensdauer, sondern auch der Art, wie wir Geschäfte machen: mit Ehrlichkeit, Transparenz und Integrität. Wir glauben nicht an “gut genug”; wir streben nach Exzellenz. Bei Heister Solartechnik GmbH bedeutet Exzellenz nicht nur erstklassige Produkte, sondern auch ein Unternehmen, das für morgen aufbaut und nicht nur für heute.",
    overlayDescription: "Mit einer Photovoltaikanlage von Heister Solartechnik GmbH investieren Sie in höchste Qualität und Langlebigkeit. Profitieren Sie bei uns von einer höheren Stromausbeute pro m². Darüber hinaus überzeugen unsere Premium-Komponenten mit ihrer außerordentlichen Lebensdauer. Interessiert an einer erstklassigen PV-Anlage in Köln? Kontaktieren Sie uns und erleben Sie den Unterschied in Qualität und Service!",
    buttonText: "Kontakt",
  };

  isAnimated: boolean = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const qualitaetElement = document.querySelector('.qualitaet-container'); 
    if (qualitaetElement) {
      const qualitaetPosition = qualitaetElement.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight;

      if (qualitaetPosition < windowHeight && qualitaetPosition > 0) {
        this.isAnimated = true;
      } 
    }
  }
}
