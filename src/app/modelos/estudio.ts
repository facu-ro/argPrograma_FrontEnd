export class Estudio {

    id_estudio:number;
    titulo:string;
    estado:string;
    descripcion:string;
    imagen:string;
    url:string;
    institucion : string; 
    fk_persona: number;


    constructor(titulo:string, estado:string, descripcion:string, imagen:string, url:string, institucion:string, fk_persona: number) {
        this.titulo= titulo;
        this.estado= estado;
        this.descripcion= descripcion;
        this.imagen= imagen;
        this.url= url;
        this.institucion= institucion;
        this.fk_persona= fk_persona;
    }
}
