export class Experiencia {

    id_experiencia:number;
    puesto:string;
    inicio:string;
    fin:string;
    descripcion:string;
    imagen:string;
    url:string;
    empresa:string;
    fk_presentacion:number;

    constructor(puesto:string, inicio: string, fin: string, descripcion:string, imagen:string, url:string, empresa:string,  fk_presentacion : number) {
        this.puesto= puesto;
        this.inicio= inicio;
        this.fin= fin;
        this.descripcion= descripcion;
        this.imagen= imagen;
        this.url= url;
        this.empresa= empresa;
        this.fk_presentacion= fk_presentacion;
    }
}
