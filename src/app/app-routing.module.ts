import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './vistas/login/login.component';
import{NuevoComponent}from './vistas/nuevo/nuevo.component';
import {DashboardComponent} from './vistas/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MenulateralComponent } from './vistas/menulateral/menulateral.component';
import { EditarComponent } from './vistas/editar/editar.component';
import{MaestroComponent} from './vistas/maestro/maestro.component';
import{HorarioComponent} from './vistas/horario/horario.component';
import{MatriculaComponent} from './vistas/matricula/matricula.component';
import{EditarhorarioComponent} from './vistas/editarhorario/editarhorario.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,  
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'nuevo', component: NuevoComponent },
      {path: 'menulateral',component:MenulateralComponent},
      {path:'editar/:id', component:EditarComponent},
      {path:'editar', component:EditarComponent},
      {path:'matricula',component:MatriculaComponent},
      {path:'horario', component:HorarioComponent},
      {path:'maestro',component:MaestroComponent},
      {path:'editarhorario',component:EditarhorarioComponent}
    ]
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// esto se exporta y la utilizo en app modile ts la importo y la declaro la variable y asi optimizo codigo 
export const routingComponents = [LayoutComponent,LoginComponent,DashboardComponent,NuevoComponent,MenulateralComponent,EditarComponent,EditarComponent,MatriculaComponent,HorarioComponent,MaestroComponent
,EditarComponent]
