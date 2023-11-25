import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaAlumnoI } from '../../modelos/ListaAlumno.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  alumno: ListaAlumnoI[] = [];
  filtroId: any = "";

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  private cargarAlumnos() {
    this.api.getallAlumno().subscribe((data) => {
      this.alumno = data.response;
    });
  }

  editarCliente(id: any) {
    this.router.navigate(['/editar', id]);
  }

  desabilitarCliente(index: number) {
    this.alumno.splice(index, 1);
    this.actualizarLocalStorage();
  }

  NuevoE() {
    this.router.navigate(['/nuevo']);
  }

  redireccionar(event: any, idCliente: any) {
    const opcionSeleccionada = event.target.value;

    switch (opcionSeleccionada) {
      case 'opcion1':
        this.editarCliente(idCliente);
        break;
      case 'opcion2':
        this.desabilitarCliente(idCliente);
        break;
      default:
        break;
    }
  }

  private actualizarLocalStorage() {
    localStorage.setItem('clientes', JSON.stringify(this.alumno));
    // Vuelve a cargar los alumnos después de la actualización
    this.cargarAlumnos();
  }
}


  // filtrarTabla(): void {
  //   const clientesStorage = localStorage.getItem('clientes');
  //   const clientesOriginales: ListaAlumnoI[] = clientesStorage ? JSON.parse(clientesStorage) : [];
  //   this.router.navigate(['/dashboard'], { relativeTo: this.route });

  //   if (this.filtroId) {
  //     const filtroIdString = this.filtroId.toString().trim();
  //     this.alumno = clientesOriginales.filter((cliente: ListaAlumnoI) => this.alumno.estudianteID.toString().trim() === filtroIdString);
  //     this.router.navigate(['/dashboard'], { relativeTo: this.route });
      
  //    } else {
  //     this.alumno = [...clientesOriginales];
  //     this.router.navigate(['/dashboard'], { relativeTo: this.route });
    
  //   }
  //   this.router.navigate(['/dashboard'], { relativeTo: this.route });
  // }


