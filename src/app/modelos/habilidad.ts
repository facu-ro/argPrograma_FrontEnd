export class Habilidad {

    id_habilidad:number;
    habilidad:string;
    porcentaje:number;
    imagen:string    
    fk_persona:number;


    constructor(habilidad:string, porcentaje:number, fk_persona:number, imagen:string) {
	    
        this.imagen=imagen
        this.habilidad= habilidad;
        this.porcentaje= porcentaje;
        this.fk_persona= fk_persona

    }
}
