import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

@Component({
   selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.page.html',
  styleUrls: ['./lista-tareas.page.scss'],
  standalone: true,
  imports: [CommonModule,IonicModule, FormsModule, NgIf, NgFor]
})
export class ListaTareasPage  {
fechaInicio: string = '';
  fechaFin: string = '';
  planta: string = 'all';
  departamento: string = 'all';
  status: string = 'all';
  tarea: string = 'all';  
  descripciontarea: string = '';
  empleado: string = 'all';

  historial = [
    {
      tarea: 'Actualizar base de datos',
      descripciontarea: 'Actualizar la base de datos con la información más reciente proporcionada por el equipo de ventas.',
      fecha: '01/06/2025',
      statusIcon: 'checkmark-circle',
      statusColor: 'success',
      statusTexto: 'Activa',
      empleado: 'Kiara Barrientos'
    },
    {
      tarea: 'Terminar reporte mensual',
      descripciontarea: 'Completar y enviar el reporte mensual de actividades al gerente antes del fin de mes.',
      fecha: '01/06/2025',
      statusIcon: 'close-circle',
      statusColor: 'danger',
      statusTexto: 'Terminada',
      empleado: 'Kiara Barrientos'
    }
  ];

 

}
