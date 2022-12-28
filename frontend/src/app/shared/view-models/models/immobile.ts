export default class Immobile{
    nome:string;
    address:string;
    forsale:boolean;
    price:number;
    createdByUser:number;
    codig:string;
    type:string;
    realtorId:number;
    coordId:number;
    description:string;
    createdAt:Date = new Date();
    region:string;
    coordName:string;
    realtorName:string;

    constructor(){
        this.nome = "";
        this.address = "";
        this.forsale = false;
        this.price = 0;
        this.createdByUser = 0;
        this.codig = "";
        this.type = "";
        this.realtorId = 0;
        this.coordId = 0;
        this.description = "";
        this.coordName = "";
        this.region = "";
        this.realtorName = "";
    }
}