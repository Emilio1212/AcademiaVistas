import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import{ ReactiveFormsModule,FormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { MenulateralComponent } from './vistas/menulateral/menulateral.component';
import { MaestroComponent } from './vistas/maestro/maestro.component';
import { MatriculaComponent } from './vistas/matricula/matricula.component';

import { EditarhorarioComponent } from './vistas/editarhorario/editarhorario.component';
import { EditarmatriculaComponent } from './vistas/editarmatricula/editarmatricula.component';
import { AgregarnotasComponent } from './vistas/agregarnotas/agregarnotas.component';



// import { LoginComponent } from './vistas/login/login.component';
// import { DashboardComponent } from './vistas/dashboard/dashboard.component';
// import { NuevoComponent } from './vistas/nuevo/nuevo.component';
// import { EditarComponent } from './vistas/editar/editar.component';

@NgModule({ 
  declarations: [
    AppComponent,
    routingComponents,
    LayoutComponent,
    EditarComponent,
    MenulateralComponent,
    MaestroComponent,
    MatriculaComponent,
   
    EditarhorarioComponent,
    EditarmatriculaComponent,
    AgregarnotasComponent,
  
    // LoginComponent,
    // DashboardComponent,
    // NuevoComponent,
    // EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
