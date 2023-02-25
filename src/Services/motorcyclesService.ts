import Motorcycle from '../Domains/Motorcycle';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesModel';

export default class MotorcycleService {
  public async create(moto: IMotorcycles): Promise<Motorcycle> {
    const motorcycleODM = new MotorcyclesODM();
    const newMoto = await motorcycleODM.create(moto);

    return new Motorcycle(newMoto);
  }

  public async findAll() {
    const motorcycleODM = new MotorcyclesODM();
    const allMotos = await motorcycleODM.findAll();
    const result = allMotos.map((moto) => new Motorcycle(moto));
    
    return result;
  }

  public async findById(id: string) {
    const motorcycleODM = new MotorcyclesODM();
    const result = await motorcycleODM.findById(id);
   
    if (!result) {
      return null;
    }
    
    return new Motorcycle(result);
  }

  public async updateMotoById(id: string, entity: IMotorcycles) {
    const motorcycleODM = new MotorcyclesODM();
    const result = await motorcycleODM.updateById(id, entity);

    if (!result) {
      return null;
    }

    return new Motorcycle(result);
  }
}