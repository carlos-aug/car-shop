import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/carModel';

export default class CarService {
  async createCar(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return new Car(newCar);
  }
}