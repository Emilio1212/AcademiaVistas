
export interface ResultadoI{

 mensaje:string;
 response: ListaClienteI[];

}

export interface ListaClienteI{
    idCliente : number;
    categoria:string;
    nombreCliente:string;
    apellidoCliente:string; 
   
    

}
