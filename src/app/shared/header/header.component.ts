import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'Über Uns - Heister Solartechnik GmbH';
  @Input() whiteSpace: string = 'nowrap'; 
  @Input() textOverflow: string = 'ellipsis'; 
  @Input() customImage: string = 'assets/mehrgecropped.jpg';
  @Input() showSpacer: boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', () => {
      const spacer = document.querySelector('.elementor-spacer') as HTMLElement;
      if (spacer) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = window.scrollY / maxScroll;
        const minWidth = 10;
        const maxWidth = 30;
        const decrement = -50;

        const newWidth = maxWidth - (maxWidth - minWidth - decrement) * scrollFraction;
        this.renderer.setStyle(spacer, 'width', `${newWidth}%`);
      }
    });
  }
}
