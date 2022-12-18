

interface IMockUser {
    id:number,
    name:string,
    surname:string,
    email:string,
    type:number,
    password:string
}

export const MockUsers:Array<IMockUser> = [
    {
        id:1,
        name:"Pedro",
        surname:"Martins",
        email:"pedro@mail.com",
        password:"1234",
        type: 1
    },
    {
        id:2,
        name:"Karcls",
        surname:"Oitie",
        email:"eeewr32e2w22@mail.com",
        password:"1234",
        type: 1
    },
    {
        id:3,
        name:"Karcls",
        surname:"Oitie",
        email:"fulano@mail.com",
        password:"1234",
        type: 2
    }

]