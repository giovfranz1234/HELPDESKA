export class Usuario {
    num_sec?: number;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    docIdentidad: string;
    fechaNac: Date;
    tipo_usuario:string;
    estado: string;
    constructor(nombre: string, apPaterno: string, apMaterno: string, docIdentidad: string, fechaNac:Date, tipo_usuario:string, estado: string ){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.docIdentidad = docIdentidad;
        this.fechaNac = fechaNac;
        this.tipo_usuario = tipo_usuario;
        this.estado = estado;
    }
}
