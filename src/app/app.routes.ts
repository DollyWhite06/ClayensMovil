import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes),
  },
 {
  path: 'login',
  loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
},
  {
    path: 'dashboar-menu',
    loadComponent: () => import('./dashboar-menu/dashboar-menu.page').then( m => m.DashboarMenuPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'reportes',
    loadComponent: () => import('./reportes/reportes.page').then( m => m.ReportesPage)
  },
  {
    path: 'historico',
    loadComponent: () => import('./historico/historico.page').then( m => m.HistoricoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'cambiar',
    loadComponent: () => import('./cambiar/cambiar.page').then( m => m.CambiarPage)
  },
  {
    path: 'cambiar-contrasena',
    loadComponent: () => import('./cambiar-contrasena/cambiar-contrasena.page').then( m => m.CambiarContrasenaPage)
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar-empleado/buscar-empleado.page').then( m => m.BuscarEmpleadoPage)
  },
  {
    path: 'empleado',
    loadComponent: () => import('./empleado/empleado.page').then( m => m.EmpleadoPage)
  },
  {
    path: 'historico-empleado',
    loadComponent: () => import('./historico-empleado/historico-empleado.page').then( m => m.HistoricoEmpleadoPage)
  }

];
