import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-historico-empleado',
  templateUrl: './historico-empleado.page.html',
  styleUrls: ['./historico-empleado.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoricoEmpleadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
