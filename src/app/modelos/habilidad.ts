export class Habilidad {

    id_habilidad:number;
    habilidad:string;
    porcentaje:number;
    imagen:string    
    fk_presentacion:number;


    constructor(habilidad:string, porcentaje:number, fk_presentacion:number, imagen:string) {
	    
        this.imagen=imagen
        this.habilidad= habilidad;
        this.porcentaje= porcentaje;
        this.fk_presentacion= fk_presentacion

    }
}
