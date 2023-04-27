export class Habilidad {

    id_habilidad:number;
    descripcion_habilidad:string;
    porcentaje:number;
    imagen:string    
    fk_presentacion:number;


    constructor(descripcion_habilidad:string, porcentaje:number, fk_presentacion:number, imagen:string) {
	    
        this.imagen=imagen
        this.descripcion_habilidad= descripcion_habilidad;
        this.porcentaje= porcentaje;
        this.fk_presentacion= fk_presentacion

    }
}
