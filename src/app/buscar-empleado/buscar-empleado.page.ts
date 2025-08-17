import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//import { EmpleadoPage } from '../empleado/empleado.page';
//import { BuscarEmpleadoPage } from '../buscar-empleado/buscar-empleado.page';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.page.html',
  styleUrls: ['./buscar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class BuscarEmpleadoPage {
  numero: string = '';


  buscar() {
    if (this.numero) {
      console.log('Numero con:', this.numero);
    } else {
      alert('Por favor ingresa el numero de empleado');
    }
  }
}

