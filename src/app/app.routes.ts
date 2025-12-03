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
    path: 'dashboar-menu', //ves tus actividades personal
    loadComponent: () => import('./dashboar-menu/dashboar-menu.page').then( m => m.DashboarMenuPage)
  },
  {
    path: 'dashboard', //ves tus actividades, reportes y usuarios a quien asignarles actividades gerente
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'reportes', //reportes para el admin
    loadComponent: () => import('./reportes/reportes.page').then( m => m.ReportesPage)
  },
  {
    path: 'historico', //historico de actividades
    loadComponent: () => import('./historico/historico.page').then( m => m.HistoricoPage)
  },
  {
    path: 'perfil', //no hecho
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'buscar', //buscar empleado para asignar tarea
    loadComponent: () => import('./buscar-empleado/buscar-empleado.page').then( m => m.BuscarEmpleadoPage)
  },
  {
    path: 'empleado', //perfil del empleado seleccionado
    loadComponent: () => import('./empleado/empleado.page').then( m => m.EmpleadoPage)
  },
  {
    path: 'historicoemp', //historico de actividades del empleado seleccionado
    loadComponent: () => import('./historico-empleado/historico-empleado.page').then( m => m.HistoricoEmpleadoPage)
  },
  {
    path: 'asistencia', //ya no se usa
    loadComponent: () => import('./asistencia-fecha/asistencia-fecha.page').then( m => m.AsistenciaFechaPage)
  },
  {
    path: 'crear-tarea',// crea tareas
    loadComponent: () => import('./crear-tarea/crear-tarea.page').then( m => m.CrearTareaPage)
  },
  {
    path: 'lista-tareas',
    loadComponent: () => import('./lista-tareas/lista-tareas.page').then( m => m.ListaTareasPage)
  }

];
