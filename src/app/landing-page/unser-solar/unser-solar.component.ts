import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProductDetail {
  title: string;
  power: string;
  description: string;
  smallTitle: string;
  smallText: string;
  features: string[];
}

@Component({
  selector: 'app-unser-solar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unser-solar.component.html',
  styleUrls: ['./unser-solar.component.scss']
})
export class UnserSolarComponent {
  currentProduct: ProductDetail;
  activeIndex: number = 0; 
  products: ProductDetail[] = [
    {
      title: 'Mono S4 Halfcut',
      power: '445W',
      description: 'Deutsche Qualität und Innovation seit über 25 Jahren',
      smallTitle: 'Solar Fabrik Mono S4 Halfcut | Trend Full Black Doppelglas-Modul',
      smallText: 'Solar Fabrik steht für über 25 Jahre Erfahrung in der Produktion von Photovoltaikmodulen nach höchsten deutschen Qualitätsstandards und modernster Zelltechnologie. Als familiengeführtes Unternehmen profitiert man als Kunde von einer zuverlässigen deutschen Herstellergarantie und unterstützt ein Unternehmen, das aktuell wieder eine eigene Produktionslinie in Deutschland aufbaut. Mit einer beeindruckend niedrigen Reklamationsquote von unter 0,003% setzt Solar Fabrik Maßstäbe in Sachen Qualität und Kundenzufriedenheit.',
      features: [
        'Hohe Leistung mit bis zu 22,5% Wirkungsgrad',
        '30 Jahre Produkt- und Leistungsgarantie mit mindestens 87,4% Leistung nach 30 Jahren',
        'Doppelglasmodul mit N-Type TOPCon-Zellen und bifazialem Design',
        'Halfcut-Technologie: Verbesserte Leistung bei Teilverschattung',
        'Optimiertes Schwachlichtverhalten',
        'Herstellung nach strengsten deutschen Qualitätsstandards'
      ]
    },
    {
      title: 'Neostar 2S+ Doppelglas',
      power: '455W',
      description: 'Führende Moduleffizienz',
      smallTitle: 'Aiko Solar N-Type ABC Neostar 2S+ Doppelglas-Modul',
      smallText: 'Aiko Solar, ein führender chinesischer Hersteller in der Solarzellenproduktion, setzt mit seinem neuesten Hochleistungsmodul erneut Maßstäbe. Das Neostar 2S+ ist eine Weiterentwicklung der erfolgreichen All-Back-Contact (ABC) Technologie und beeindruckt mit einer herausragenden Moduleffizienz von bis zu 23,1%. Die elegante Vollschwarz-Optik ohne sichtbare Zellkontakte vereint Spitzenleistung mit ästhetischem Design.',
      features: [
        'Spitzenwirkungsgrad von bis zu 23,1%',
        '25 Jahre Produktgarantie',
        '30 Jahre lineare Leistungsgarantie mit 88,85% Restleistung nach 30 Jahren',
        'ABC-Technologie für eine kontaktfreie Modulvorderseite',
        'Komplett schwarze Oberfläche',
        'Optimierte Leistung bei Teilverschattung',
        'Verbesserter Temperaturkoeffizient für höhere Effizienz auch bei warmen Bedingungen'
      ]
    }
  ];

  constructor() {
    this.currentProduct = this.products[this.activeIndex];
  }

  showProduct(index: number) {
    this.activeIndex = index;
    this.currentProduct = this.products[index];
  }

  getActiveButtonStyle(index: number): { backgroundColor: string, color: string, fontWeight: number } {
    return {
      backgroundColor: this.activeIndex === index ? 'black' : '#E4E4E4',
      color: this.activeIndex === index ? 'white' : 'black',
      fontWeight: this.activeIndex === index ? 500 : 400
    };
  }

  getProductDataSheet(): string {
    return this.currentProduct.title === 'Mono S4 Halfcut' 
      ? 'assets/mono-s4-datenblatt.pdf' 
      : 'assets/Aiko-Neostar-2S.pdf';
  }
}
