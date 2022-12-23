export interface IMockImmobile{
    id:number,
    nome:string,
    address:string,
    forsale:boolean,
    price:number,
    createdByUser:number,
    codig:string,
    type:string,
    realtorId:number,
    coordId:number,
    createdAt:Date,
    description:string,
    region:string,
    coordName:string
}


export const MockImmobile:Array<IMockImmobile> = [
    {
        id:1,
        nome:"Apartamento EHJI3 ",
        address:"Maximon docefim",
        codig:"OI38Y"   ,
        coordId:2,
        coordName:"Pedro",
        region:"AM",
        createdAt:new Date(),
        createdByUser:3,
        price:100000,
        forsale:true,
        realtorId:3,
        type:"APARTAMENTO",
        description:"Venenatis etiam class ut curae aliquam congue vestibulum mi donec, iaculis ut non ligula sit primis blandit molestie dui, suspendisse leo congue urna libero interdum cursus vulputate. commodo vivamus vulputate tristique morbi interdum fames pulvinar, lorem cursus neque imperdiet suspendisse. venenatis urna fermentum habitasse velit orci pellentesque orci, per quisque est ante diam etiam neque, senectus consequat magna habitant ultrices eros. tristique tincidunt condimentum aptent iaculis erat posuere nisi, quam odio pharetra elit consequat adipiscing cubilia, tellus iaculis imperdiet consequat vitae justo. nam habitasse dictumst purus lobortis faucibus urna nullam cubilia dictumst litora fusce sociosqu commodo, sapien euismod cubilia feugiat primis felis platea integer ad ipsum lectus consectetur"
    },
    {
        id:2,
        nome:"Apartamento IJ3392 ",
        address:"Maximon docefim",
        codig:"DW21"   ,
        coordId:2,
        coordName:"lUIA",
        region:"AM",
        createdAt:new Date(),
        createdByUser:3,
        price:100200000,
        forsale:true,
        realtorId:3,
        type:"APARTAMENTO",
        description:"Venenatis etiam class ut curae aliquam congue vestibulum mi donec, iaculis ut non ligula sit primis blandit molestie dui, suspendisse leo congue urna libero interdum cursus vulputate. commodo vivamus vulputate tristique morbi interdum fames pulvinar, lorem cursus neque imperdiet suspendisse. venenatis urna fermentum habitasse velit orci pellentesque orci, per quisque est ante diam etiam neque, senectus consequat magna habitant ultrices eros. tristique tincidunt condimentum aptent iaculis erat posuere nisi, quam odio pharetra elit consequat adipiscing cubilia, tellus iaculis imperdiet consequat vitae justo. nam habitasse dictumst purus lobortis faucibus urna nullam cubilia dictumst litora fusce sociosqu commodo, sapien euismod cubilia feugiat primis felis platea integer ad ipsum lectus consectetur"
    }
]