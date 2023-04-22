export class Persona {

   private id_persona:number;

   private email:string;

   private  password:string;

  constructor(email?:string, password?:string){
       
        this.email= email;
        
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
