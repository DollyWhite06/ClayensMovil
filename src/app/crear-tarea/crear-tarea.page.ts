import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
   IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  ToastController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.page.html',
  styleUrls: ['./crear-tarea.page.scss'],
  standalone: true,
  imports: [ CommonModule,
  FormsModule,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle
  ]
})
export class CrearTareaPage {
  
  titulo = '';
  descripcion = '';
  asignado = '';
  estado = '';
  fechaInicio = '';
  fechaFin = '';

  tareas: any[] = [];

  constructor(private toastCtrl: ToastController) {}

  async mostrarToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  crearTarea() {
    if (!this.titulo || !this.descripcion || !this.asignado || !this.estado || !this.fechaInicio || !this.fechaFin) {
      this.mostrarToast('Todos los campos son obligatorios');
      return;
    }

    const nuevaTarea = {
      titulo: this.titulo,
      descripcion: this.descripcion,
      asignado: this.asignado,
      estado: this.estado,
      fechaInicio: this.fechaInicio,
      fechaFin: this.fechaFin,
    };

    this.tareas.push(nuevaTarea);

    this.mostrarToast('Tarea creada correctamente');

    // limpiar formulario
    this.titulo = '';
    this.descripcion = '';
    this.asignado = '';
    this.estado = '';
    this.fechaInicio = '';
    this.fechaFin = '';
  }
}
