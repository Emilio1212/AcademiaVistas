import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator} from '@angular/forms';
import { EstudianteI, EstudianteResulteI } from '../../modelos/Estudiante.interface';
import { ApiService } from '../../servicios/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent implements OnInit  {
  nuevoForm = new FormGroup({
    idCliente: new FormControl(''),
    categoria: new FormControl(''),
    nombreCliente: new FormControl(''),
    apellidoCliente: new FormControl('')
  });
  constructor(private api:ApiService, private router:Router){}
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    
  }
  
  postForm(form: Partial<EstudianteI>): void {
     
     this.api.postEstudent(form).subscribe(data =>{

       console.log(data);
     })
    console.log('Enviando formulario con datos:', form);
    
  }
  prepareFormValues(): Partial<EstudianteI> {
    return {
      idCliente: this.nuevoForm.get('idCliente')?.value ?? '',
      categoria: this.nuevoForm.get('categoria')?.value ?? '',
      nombreCliente: this.nuevoForm.get('nombreCliente')?.value ?? '',
      apellidoCliente: this.nuevoForm.get('apellidoCliente')?.value ?? ''
    };
  }

}
