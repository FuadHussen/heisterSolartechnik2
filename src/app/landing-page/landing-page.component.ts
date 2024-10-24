import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
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
