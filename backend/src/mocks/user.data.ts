

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
        id:786,
        name:"Tucker",
        surname:"Martins",
        email:"ticker@mail.com",
        password:"1234",
        type: 1,
        address:"Rua Tal de Tal, Tancredo Inmore - Manaus Amazonas"
    },
    {
        id:321,
        name:"Iahg",
        surname:"Chroleo",
        email:"chroleo@mail.com",
        password:"1234",
        type: 1,
        address:"Rua Mim mimi, Origma - Manaus Amazonas"
    },
    {
        id:2,
        name:"Moarius",
        surname:"Oitie",
        email:"edew@mail.com",
        password:"1234",
        type: 3,
        address:"Rua Tal de Tal, 7383, Cidade Nova - Manaus Amazonas"
    },
    {
        id:3,
        name:"Karcls",
        surname:"Corretor",
        email:"fulano@mail.com",
        password:"1234",
        type: 2,
        address:"Rua Funai Tal, Tancredo EE. - Manaus Amazonas"
    }

]