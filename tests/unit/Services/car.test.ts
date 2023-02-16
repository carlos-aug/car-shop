import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
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
    
    Sinon.stub(Model, 'create').resolves(carOutput);
    
    const service = new CarService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
});