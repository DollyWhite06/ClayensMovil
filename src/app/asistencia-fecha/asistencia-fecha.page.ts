import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';


@Component({
  selector: 'app-asistencia-fecha',
  templateUrl: './asistencia-fecha.page.html',
  styleUrls: ['./asistencia-fecha.page.scss'],
   standalone: true,
  imports: [CommonModule,IonicModule, FormsModule, NgIf, NgFor]
})
export class AsistenciaFechaPage {
 
fechaInicio: string = '';
  fechaFin: string = '';
  planta: string = 'all';
  departamento: string = 'all';
  status: string = 'all';

  historial = [
    {
      nombre: 'Kiara Barrientos',
      horario: '8:00/18:00',
      fecha: '01/06/2025',
      statusIcon: 'checkmark-circle',
      statusColor: 'success',
      statusTexto: 'Asistencia'
    },
    {
      nombre: 'Karla lopez',
      horario: '--:--/--:--',
      fecha: '01/06/2025',
      statusIcon: 'close-circle',
      statusColor: 'danger',
      statusTexto: 'N/P'
    }
  ];

 

}

