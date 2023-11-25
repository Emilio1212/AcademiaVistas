export interface ResultadoAlumnoI{

    mensaje:string;
    response: ListaAlumnoI[];
   
   }
   
export interface ListaAlumnoI{
    estudianteID:number,
    nombre: string,
    edad: string,
    direccion: string,
    celular: string,
    correo: string,
    cedula: string    
   }
   