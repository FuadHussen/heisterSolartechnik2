import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funktion-pv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './funktion-pv.component.html',
  styleUrl: './funktion-pv.component.scss'
})
export class FunktionPVComponent {
  pvData = [
    {
      title: 'Absorption des Sonnenlichts',
      description: 'Die Solarmodule Ihrer Anlage sind mit Photovoltaikzellen ausgestattet. Diese Zellen absorbieren das Sonnenlicht und erzeugen daraus einen elektrischen Gleichstrom.'
    },
    {
      title: 'Umwandlung in Wechselstrom',
      description: 'Ein Wechselrichter nimmt sich diesen Gleichstrom und wandelt ihn in den für Ihre Haushaltsgeräte nutzbaren Wechselstrom um.'
    },
    {
      title: 'Strom für Ihren Haushalt',
      description: 'Der frisch erzeugte Wechselstrom versorgt zuerst alle Ihre Elektrogeräte – von der Lampe bis zum Kühlschrank.'
    },
    {
      title: 'Speichern von Überschuss',
      description: 'Überschuss clever nutzen: An den meisten Tagen von April bis Oktober produzieren Sie mehr Strom als benötigt. Diesen Überschuss können Sie in Batteriespeichern aufbewahren und zu einem späteren Zeitpunkt nutzen.'
    },
    {
      title: 'Laden von Elektrofahrzeugen',
      description: 'Mit dem überschüssigen Strom können Sie auch Ihr Elektroauto laden und so umweltfreundlich unterwegs sein.'
    },
    {
      title: 'Einspeisen ins Netz',
      description: 'Sollte noch Energie übrig sein, wird diese ins öffentliche Stromnetz eingespeist. Sie erhalten dafür eine Einspeisevergütung in Höhe von 7-8 Cent pro kWh.'
    }
  ];

  getClass(index: number): string {
    const classes = ['sun', 'panels', 'lightning', 'cable', 'battery', 'pole'];
    return classes[index] || '';
  }
}
