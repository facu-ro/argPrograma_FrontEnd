export class Redes {

    id_redes:number;
    descripcion:string;
    url:string;
    icono: string;
    fk_persona: number;

    constructor(descripcion:string, url:string, icono:string, fk_persona:number) {
        this.descripcion=descripcion;
        this.url=url;
        this.icono=icono;
        this.fk_persona=fk_persona;

    }
}



