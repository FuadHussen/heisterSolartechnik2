import { Component, OnInit, Renderer2 } from '@angular/core';
import { FirstSectionComponent } from "./first-section/first-section.component";
import { SecondSectionComponent } from "./second-section/second-section.component";
import { ThirdSectionComponent } from "./third-section/third-section.component";
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-ueber-uns',
  standalone: true,
  imports: [FirstSectionComponent, SecondSectionComponent, ThirdSectionComponent, HeaderComponent],
  templateUrl: './ueber-uns.component.html',
  styleUrl: './ueber-uns.component.scss'
})
export class UeberUnsComponent {}
