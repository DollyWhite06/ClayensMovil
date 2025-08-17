import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class LoginPage {
  email: string = '';
  password: string = '';
  hidePassword = true;

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  login() {
    if (this.email && this.password) {
      console.log('Login con:', this.email, this.password);
    } else {
      alert('Por favor ingresa tus credenciales');
    }
  }
}
