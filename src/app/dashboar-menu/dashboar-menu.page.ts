import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboar-menu',
  templateUrl: './dashboar-menu.page.html',
  styleUrls: ['./dashboar-menu.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DashboarMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
