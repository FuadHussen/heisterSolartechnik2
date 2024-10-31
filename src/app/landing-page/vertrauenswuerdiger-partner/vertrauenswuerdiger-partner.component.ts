import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertrauenswuerdiger-partner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './vertrauenswuerdiger-partner.component.html',
  styleUrl: './vertrauenswuerdiger-partner.component.scss'
})
export class VertrauenswuerdigerPartnerComponent {
  isAnimated: boolean = false; 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const h1Element = document.querySelector('h1'); 
    if (h1Element) {
      const h1Position = h1Element.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight;

      if (h1Position < windowHeight && h1Position > 0) {
        this.isAnimated = true;
      } 
    }
  }
}
