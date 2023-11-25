import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteI, EstudianteResulteI } from '../../modelos/Estudiante.interface';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AlumnoI } from '../../modelos/Alumno.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {
  datosEstudiante: AlumnoI = {} as AlumnoI; // // Cambiado a un solo objeto, no un array
  editarForm = new FormGroup({
    estudianteID: new FormControl(''),
    nombre: new FormControl(''),
    edad: new FormControl(''),
    correo:new FormControl(''),
    cedula:new FormControl('')
  });

  constructor(
    private activerouter: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private cd: ChangeDetectorRef
  ) {}
  

  ngOnInit(): void {
    // let Estudianteid = this.activerouter.snapshot.paramMap.get('id');
    // this.api.getSingleEstudiante(Estudianteid).subscribe(data => {
    //   console.log(data);
    //     this.datosEstudiante = data.response;
    //    console.log('Datos del Estudiante:', this.datosEstudiante);
    //   this.actualizarFormulario();
    // });
    
  

    
  }

  // private actualizarFormulario(): void {
  //   this.editarForm.patchValue({
  //     estudianteID: this.datosEstudiante.estudianteID,
  //     nombre: this.datosEstudiante.nombre,
  //     edad: this.datosEstudiante.edad,
  //     correo: this.datosEstudiante.correo,
  //     cedula: this.datosEstudiante.cedula
  //   });


  // }
  

  // postForm(form: Partial<EstudianteI>): void {
  
  //   this.api.putEstudiante(form).subscribe(data =>{

  //     console.log(data);
  //   })
  //   console.log('Enviando formulario con datos:', form);
    
  // }
  // prepareFormValues(): Partial<EstudianteI> {
  //   return {
  //     idCliente: this.editarForm.get('idCliente')?.value ?? '',
  //     categoria: this.editarForm.get('categoria')?.value ?? '',
  //     nombreCliente: this.editarForm.get('nombreCliente')?.value ?? '',
  //     apellidoCliente: this.editarForm.get('apellidoCliente')?.value ?? ''
  //   };
  // }
   cancelarEdicion(): void {
    
     this.router.navigate(['/dashboard']);
   }
  // eliminar() {
  //   let datos: EstudianteI = {
  //     idCliente: this.editarForm.value.idCliente || '', // Usa un valor por defecto, como una cadena vacía
  //     categoria: this.editarForm.value.categoria || '',
  //     nombreCliente: this.editarForm.value.nombreCliente || '',
  //     apellidoCliente: this.editarForm.value.apellidoCliente || '',
  //   };
  
  //   this.api.deleteEstudent(datos).subscribe(data => {
  //     console.log(data);
  //   });
  // }
  // (ngSubmit)="postForm(prepareFormValues())"
  
  
  
}
