import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/carService';

describe('Testa carService', function () {
  it('Deveria criar um novo carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const newCar = {
      id: '63ee34c7ce07f7f40d10f561',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    
    const carOutput: Car = new Car(newCar);
    
    sinon.stub(Model, 'create').resolves(carOutput);
    
    const service = new CarService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Deveria buscar um carro por id', async function () {
    const carID = '63ee34c7ce07f7f40d10f561';

    const dataCar = {
      id: carID,
      model: 'Up!',
      year: 2022,
      color: 'white',
      buyValue: 5000,
      status: true,
      doorsQty: 2,
      seatsQty: 2,
    };

    sinon.stub(Model, 'findById').resolves(dataCar);

    const service = new CarService();
    const result = await service.findById(carID);

    expect(result).to.be.deep.equal(dataCar);

    sinon.restore();
  });
  
  it('Deveria atualizar um carro por id', async function () {
    const carID = '634852326b35b59438fbea2f';
    const update = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };

    const carOutput = new Car(update);
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findOneAndUpdate').resolves(carOutput);
   
    const service = new CarService();
    const result = await service.updateCarById(carID, update);
    
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Deveria listar os carros com sucesso', async function () {
    const carList = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Gol',
        year: 1990,
        color: 'Red',
        buyValue: 8.99,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    const carsOutput = carList.map((car) => new Car(car));
    sinon.stub(Model, 'find').resolves(carsOutput);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(carsOutput);

    sinon.restore();
  });
});