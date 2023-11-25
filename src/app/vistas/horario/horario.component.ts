import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.css'
})
export class HorarioComponent {
  constructor(private api: ApiService, private router: Router) { }
  CrearHoorario() {
    this.router.navigate(['/editarhorario']);
  }
  

}
