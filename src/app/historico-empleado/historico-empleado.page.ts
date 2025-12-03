import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-historico-empleado',
  templateUrl: './historico-empleado.page.html',
  styleUrls: ['./historico-empleado.page.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule, FormsModule, NgIf, NgFor]
})
export class HistoricoEmpleadoPage  {
fechaInicio: string = '';
  fechaFin: string = '';
  planta: string = 'all';
  departamento: string = 'all';
  status: string = 'all';
  tarea: string = 'all';  

  historial = [
    {
      nombre: 'Kiara Barrientos',
      tarea: 'Actualizar base de datos',
      fecha: '01/06/2025',
      statusIcon: 'checkmark-circle',
      statusColor: 'success',
      statusTexto: 'Activa'
    },
    {
      nombre: 'Kiara Barrientos',
      tarea: 'Terminar reporte mensual',
      fecha: '01/06/2025',
      statusIcon: 'close-circle',
      statusColor: 'danger',
      statusTexto: 'Terminada'
    }
  ];

 

}
