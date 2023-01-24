const express = require("express");
const app = express();
const port = 7000;
const { faker } = require('@faker-js/faker');
app.use(express.json())

app.listen(port,()=>console.log("Escuchando puerto: "+port))

class Usuario {
    constructor() {
        this._id = faker.datatype.number();
        this.nombre = faker.name.firstName();
        this.apellido = faker.name.lastName();
        this.numeroDeTelefono = faker.phone.number();
        this.email = faker.internet.email();
        this.contrasena = faker.datatype.uuid();
    }
}

class Empresa {
    constructor() {
        this._id = faker.datatype.number();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.address.direction() ,
            ciudad: faker.address.cityName() ,
            estado: faker.address.state(),
            codigoPostal: faker.address.zipCode() ,
            pais: faker.address.country(), 
        };
    }
}

app.get("/api/users/new",(req,res) =>{
    const nuevoUsuario = new Usuario()
    res.json(nuevoUsuario);
})

app.get("/api/companies/new", (req,res) =>{
    const nuevaEmpresa = new Empresa()
    res.json(nuevaEmpresa);
})

app.get("/api/user/company", (req,res) =>{
    const nuevoUsuario = new Usuario()
    const nuevaEmpresa = new Empresa()
    res.json({Usuario: nuevoUsuario, Empresa: nuevaEmpresa})
})
