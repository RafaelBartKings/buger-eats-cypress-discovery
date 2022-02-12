var faker = require('faker');
var cpf = require('gerador-validador-cpf');

export default {

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatspp: '11999988776',
    
            address: {
                postalcode: '02117000',
                street: 'Rua Andaraí',
                number: '990',
                details: 'Ap 150',
                district: 'Vila Maria Baixa',
                city_state: 'São Paulo/SP'
            },
            delivery_method_moto: 'Moto',
            delivery_method_bike:'Bicicleta',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}