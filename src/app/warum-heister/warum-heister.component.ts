import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-warum-heister',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warum-heister.component.html',
  styleUrl: './warum-heister.component.scss'
})
export class WarumHeisterComponent implements AfterViewInit {
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;

  information = [
    { title: 'Tradition & Innovation', text: "Wir setzen auf eine Kombination aus traditionellen Werten und Innovationen. Innovative Software und KI die bei Planung und Bürokratie hilft und ehrliche Beratung von Mensch zu Mensch – für Qualität, die überzeugt." },
    { title: 'Von Köln, für Köln', text: "Wir setzen uns dafür ein, unsere Stadt mit maßgeschneiderten Photovoltaik Lösungen und attraktiven Arbeitsplätzen zu unterstützen." },
    { title: 'Transparent & Vertrauenswürdig', text: "Keine versteckten Kosten, klare Kommunikation und langfristige Partnerschaft." },
    { title: 'Unvergleichliche Qualität', text: "Dank unserer Partnerschaft mit verschiedenen Premium Herstellern können wir konkurrenzlos lange Sicherheit durch Herstellergarantien bei allen Komponenten bieten." },
    { title: 'Individuelle Beratung', text: "Jeder Kunde ist einzigartig. Wir hören zu und bieten maßgeschneiderte Lösungen." },
    { title: 'Kundenorientierter Service', text: "Wir bieten kostenlose Vor-Ort-Termine und kommen direkt zu Ihnen nach Hause." },
    { title: 'Photovoltaikanlagen in Köln', text: "Unser Angebot umfasst maßgeschneiderte Lösungen von akribisch ausgewählten Herstellern. Wir bieten bei allen Komponenten eine Wahl aus Made in Germany, hochwertigen Preis-Leistungs-Siegern und den besten Komponenten, die produziert werden. Wir verfügen jedoch auch über die Kompetenz, auf Wunsch, Produkte verschiedenster Hersteller zu installieren. Damit garantieren wir, dass jede Lösung optimal auf Ihr Projekt zugeschnitten ist." },
    { title: 'Erfolgreiche Empfehlung', text: "Gemeinsam für ein grüneres Deutschland! Wenn Sie mit unserer Arbeit zufrieden sind, empfehlen Sie uns weiter! Für jede Empfehlung, die zu einer Installation führt, lassen wir 50 Bäume in Deutschland pflanzen. Über das Zertifikat, was Ihnen von der Stiftung XY ausgestellt wird, können Sie einsehen, wo genau Ihre Bäume gepflanzt wurden sind." }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.listItems.forEach(item => {
      observer.observe(item.nativeElement);
    });
  }
}
