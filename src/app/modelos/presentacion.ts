export class Presentacion {

   fk_persona:number;
     nombre:string;
     apellido:string;
     foto:string;
     descripcion:string;
     banner:string;


    constructor(fk_persona?:number,nombre?:string, apellido?:string, foto?:string, descripcion?:string, banner?:string){
       
        this.fk_persona=fk_persona

        this.nombre= nombre;
        this.apellido= apellido;
        this.foto= foto;
        this.descripcion= descripcion;
        this.banner= banner;
    }
}
