export class Proyecto {

    id_proyecto:number;
    titulo:string;
    descripcion:string;
    imagen:string;
    url:string;
    fk_persona:number;

    constructor(titulo:string, descripcion:string, imagen:string, url:string, fk_persona:number) {
        this.titulo= titulo;
        this.descripcion= descripcion;
        this.imagen= imagen;
        this.url= url;
        this.fk_persona= fk_persona;
    }
}
