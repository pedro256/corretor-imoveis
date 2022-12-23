

export interface IMockUser {
    id:number,
    name:string,
    surname:string,
    email:string,
    type:number,
    password:string,
    address:string
}

export const MockUsers:Array<IMockUser> = [
    {
        id:1,
        name:"Pedro",
        surname:"Martins",
        email:"pedro@mail.com",
        password:"1234",
        type: 1,
        address:"Rua Tal de Tal, Tancredo Novo - Manaus Amazonas"
    },
    {
        id:2,
        name:"Karcls",
        surname:"Oitie",
        email:"edew@mail.com",
        password:"1234",
        type: 3,
        address:"Rua Tal de Tal, 7383, Cidade Nova - Manaus Amazonas"
    },
    {
        id:3,
        name:"Karcls",
        surname:"Oitie",
        email:"fulano@mail.com",
        password:"1234",
        type: 2,
        address:"Rua Funai Tal, Tancredo EE. - Manaus Amazonas"
    }

]