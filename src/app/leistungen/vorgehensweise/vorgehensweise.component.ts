import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vorgehensweise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vorgehensweise.component.html',
  styleUrl: './vorgehensweise.component.scss'
})
export class VorgehensweiseComponent {

  steps = [
    {
      icon: 'fas fa-solar-panel',
      title: 'Ihre Erwartung an die PV-Anlage',
      description: 'Bevor wir überhaupt von Zahlen sprechen, möchten wir Ihre Vision verstehen. Was sind Ihre Ziele mit Solarenergie? Welche Erwartungen haben Sie an eine Solaranlage? Dieser erste Schritt ist uns wichtig, um sicherzustellen, dass wir genau das liefern, was Sie sich vorstellen.'
    },
    {
      icon: 'fas fa-magnifying-glass',
      title: 'Individuelle Vor-Ort-Analyse',
      description: 'Anstatt Sie mit einem Online-Rechner allein zu lassen, kommen wir persönlich zu Ihnen nach Hause. Einer unserer Solar Experten wird sich vor Ort ein Bild von den Gegebenheiten machen, die technischen Details Ihres Hauses notieren und alle Ihre Fragen beantworten.'
    },
    {
      icon: 'fas fa-comments',
      title: 'Maßgeschneiderte Beratung',
      description: 'Basierend auf unserer Vor-Ort-Analyse erstellen wir ein Angebot, das genau auf Ihre Bedürfnisse und Ihr Zuhause zugeschnitten ist. Dabei setzen wir auf Produkte von den besten Solarherstellern in Deutschland, um Qualität und Langlebigkeit zu gewährleisten.'
    },
    {
      icon: 'fas fa-tools',
      title: 'Sorgfältige Installation',
      description: 'Wir übernehmen den gesamten Installationsprozess - von der Planung über die Logistik bis hin zur eigentlichen Installation. Dabei stehen wir in ständigem Kontakt mit Ihnen und sorgen dafür, dass Sie immer auf dem Laufenden sind. Auch bei der Inbetriebnahme und der Kommunikation mit Ihrem lokalen Energieversorger sind wir an Ihrer Seite.'
    },
    {
      icon: 'fas fa-sun',
      title: 'Genießen Sie die Sonnenkraft',
      description: 'Sobald alles installiert und in Betrieb ist, können Sie sich zurücklehnen und die Vorteile Ihrer neuen Solaranlage genießen. Doch unsere Beziehung endet hier nicht. Sollten Fragen oder Anliegen auftauchen, sind wir weiterhin für Sie da.'
    }
  ];
}
