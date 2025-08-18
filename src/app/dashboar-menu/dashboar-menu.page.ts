import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboar-menu',
  templateUrl: './dashboar-menu.page.html',
  styleUrls: ['./dashboar-menu.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, NgIf, NgFor]
})
export class DashboarMenuPage  {

  constructor(private router: Router) {}

  buscarEmpleado() {
    console.log('Ir a Buscar Empleado');
    this.router.navigate(['/buscar-empleado']);  // Cambia la ruta si tienes otra
  }

  verReportes() {
    console.log('Ir a Reportes');
    this.router.navigate(['/reportes']);  // Cambia la ruta si tienes otra
  }

  logout() {
    console.log('cerrar sesión');
    // Aquí puedes limpiar tokens/session si usas auth
    this.router.navigate(['/login']);
  }
}
