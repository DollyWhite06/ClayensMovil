import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class ReportesPage  {

  verAsistenciaHoy() {
    console.log('Ir a asistencia de hoy');
    // this.router.navigate(['/asistencia']);
  }

  verHistorico() {
    console.log('Ir a histórico de asistencia');
    // this.router.navigate(['/historico']);
  }

}
