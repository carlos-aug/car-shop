import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/motorcyclesService';

describe('Testa motorcycleService', function () {
  it('Deveria criar uma nova moto com sucesso', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    
    const newMotorcycle = {
      id: '63fa1dc2b5f9ebffd56a1b1b',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };
    
    const motorcyclesOutput: Motorcycle = new Motorcycle(newMotorcycle);
    
    sinon.stub(Model, 'create').resolves(motorcyclesOutput);
    
    const service = new MotorcycleService();
    const result = await service.create(motorcycleInput);

    expect(result).to.be.deep.equal(motorcyclesOutput);

    sinon.restore();
  });

  it('Deveria buscar uma moto por id', async function () {
    const motorcycleId = '63fa1dc2b5f9ebffd56a1b1b';

    const dataMotorcycle = {
      id: motorcycleId,
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    sinon.stub(Model, 'findById').resolves(dataMotorcycle);

    const service = new MotorcycleService();
    const result = await service.findById(motorcycleId);

    expect(result).to.be.deep.equal(dataMotorcycle);

    sinon.restore();
  });

  it('Deveria atualizar uma moto por id', async function () {
    const motorcycleID = '634852326b35b59438fbea2f';
    const update = {
      id: '63fa1dc2b5f9ebffd56a1b1b',
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcyclesOutput = new Motorcycle(update);
    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findOneAndUpdate').resolves(motorcyclesOutput);
   
    const service = new MotorcycleService();
    const result = await service.updateMotoById(motorcycleID, update);
    
    expect(result).to.be.deep.equal(motorcyclesOutput);

    sinon.restore();
  });

  it('Deveria listar as motos com sucesso', async function () {
    const motorcyclesList = [
      {
        id: '63fa1dc2b5f9ebffd56a1b1b',
        model: 'Honda Biz',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '63fa1dc2b5f9ebffd56a1b',
        model: 'Honda Fan',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30,
        category: 'Street',
        engineCapacity: 600,
      },
    ];
    const motorcyclesOutput = motorcyclesList.map((moto) => new Motorcycle(moto));
    sinon.stub(Model, 'find').resolves(motorcyclesOutput);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.be.deep.equal(motorcyclesOutput);

    sinon.restore();
  });
});