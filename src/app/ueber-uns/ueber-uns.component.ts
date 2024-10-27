import { Component, OnInit, Renderer2 } from '@angular/core';
import { FirstSectionComponent } from "./first-section/first-section.component";
import { SecondSectionComponent } from "./second-section/second-section.component";
import { ThirdSectionComponent } from "./third-section/third-section.component";

@Component({
  selector: 'app-ueber-uns',
  standalone: true,
  imports: [FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent],
  templateUrl: './ueber-uns.component.html',
  styleUrl: './ueber-uns.component.scss'
})
export class UeberUnsComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const spacer = document.querySelector('.elementor-spacer') as HTMLElement;
      if (spacer) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = window.scrollY / maxScroll;
        const minWidth = 10;
        const maxWidth = 30;

        const newWidth = maxWidth - (maxWidth - minWidth) * scrollFraction;
        this.renderer.setStyle(spacer, 'width', `${newWidth}%`);
      }
    });
  }
}
