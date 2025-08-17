import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
// import { EmpleadoPage } from '../empleado/empleado.page';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.page.html',
  styleUrls: ['./empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class EmpleadoPage {

}


