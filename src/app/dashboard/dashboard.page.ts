import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, NgIf, NgFor]
})
export class DashboardPage {


  buscarEmpleado() {
    console.log('Ir a Buscar Empleado');
    // 
    // this.router.navigate(['/buscar']);
  }

  verReportes() {
    console.log('Ir a Reportes');
    // this.router.navigate(['/reportes']);
  }

}
