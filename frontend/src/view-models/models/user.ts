export default class User{
    id:number;
    name:string;
    surname:string;
    email:string;
    type:number;
    password:string;
    address:string;

    constructor(){
        this.id = 0;
        this.name = "";
        this.surname = "";
        this.email = "";
        this.type = 0;
        this.password = "";
        this.address = "";
    }
}