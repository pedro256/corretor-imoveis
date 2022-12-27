export interface IMockImmobile{
    id:number,
    nome:string,
    address:string,
    forsale:boolean,
    price:number,
    createdByUser:number,
    approved?:boolean 
    codig:string,
    type:string,
    realtorId:number,
    coordId:number,
    clientId?:number,
    createdAt:Date,
    description:string,
    region:string,
    coordName:string,
    realtorName:string,
    imgUrl:string
}


export const MockImmobile:Array<IMockImmobile> = [
    {
        id:1,
        nome:"Apartamento EHJI3 ",
        address:"Maximon docefim",
        codig:"OI38Y"   ,
        coordId:2,
        coordName:"Pedro",
        realtorName:"Iyag",
        region:"AM",
        createdAt:new Date(),
        createdByUser:3,
        price:100000,
        forsale:true,
        realtorId:3,
        type:"APARTAMENTO",
        description:"Venenatis etiam cis urna fermentum habitasse velit orci pellentesque orci, per",
        imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg",
    },
    {
        id:2,
        nome:"Apartamento IJ3392 ",
        address:"Maximon docefim",
        codig:"DW21"   ,
        coordId:2,
        coordName:"lUIA",
        realtorName:"Iyag",
        region:"AM",
        createdAt:new Date(),
        createdByUser:3,
        price:100200000,
        forsale:true,
        realtorId:3,
        type:"APARTAMENTO",
        description:"Venenatis etiam class ut curae aliquam congue vestibulum mi donec, iaculis ut ",
        imgUrl:"https://www.shutterstock.com/image-illustration/3d-illustration-image-modern-house-260nw-1753919153.jpg"
    }
]