import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultadoI } from '../../modelos/ListaCliente.interface';
import { EstudianteI, EstudianteResulteI } from '../../modelos/Estudiante.interface';
import { ResponseI } from '../../modelos/response.interface';
import { ResultadoAlumnoI } from '../../modelos/ListaAlumno.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string = "https://localhost:44386/";
  constructor(private http: HttpClient) { }

  loginByEmail(form: any): Observable<any> {
    let direccion = "http://localhost:5269/api/Usuario";
    return this.http.post<any>(direccion, form);
  }

  getallAlumno(): Observable<ResultadoAlumnoI> {
    let direccion = this.url + "api/Estudiante/Lista";
    return this.http.get<ResultadoAlumnoI>(direccion);
  }
  // getSingleEstudiante(id: any): Observable<ResultadoAlumnoI> {
  //   let direccion = this.url + '' + id;
  //   return this.http.get<ResultadoAlumnoI>(direccion);
  // }
  getSingleEstudiante(form:EstudianteI): Observable<ResponseI>{
    let dirreccion = this.url+ 'api/Estudiante/ListaPorID';
    return this.http.put<ResponseI>(dirreccion,form);
  }

  putEstudiante(form:EstudianteI): Observable<ResponseI>{
    let dirreccion = this.url+ 'api/Estudiante/ListaPorID' + form.idCliente;
    return this.http.put<ResponseI>(dirreccion,form);

  }

 deleteEstudent(form:EstudianteI):Observable<ResponseI>{
  let direccion = this.url +"api/Cliente/Eliminar"+form.idCliente;
  let options={
    Headers: new HttpHeaders({
      'Conten-type':'application/json'
    }),
    body:form
  }
  return this.http.delete<ResponseI>(direccion,options);
}
postEstudent(form:EstudianteI):Observable<ResponseI>{

  let direccion = this.url +"api/Cliente/Guardar";
  return this.http.post<ResponseI>(direccion,form);
}

 
}
