export class Persona {

   private id_persona:number;
   private nombre:string;
   private apellido:string;
   private foto:string;
   private descripcion:string;
   private banner:string;
   private email:string;
   private curriculum:string;
   private  password:string;

  constructor(email?:string, password?:string, nombre?:string, apellido?:string, foto?:string, descripcion?:string, banner?:string,  curriculum?:string){
        this.nombre= nombre;
        this.apellido= apellido;
        this.foto= foto;
        this.descripcion= descripcion;
        this.banner= banner;
        this.email= email;
        this.curriculum= curriculum;
        this.password=password;
    }

   
    

    setPassword(password:string):void{

        this.password=password;
    }

    setEmail(email:string):void{

        this.email=email;
    }


    getEmail():string{

        return this.email
    }


}
