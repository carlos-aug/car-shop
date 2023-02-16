import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/carModel';

export default class CarService {
  public async createCar(car: ICar): Promise<Car> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return new Car(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    const result = allCars.map((car) => new Car(car));
    
    return result;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const result = await carODM.findById(id);
   
    if (!result) {
      return null;
    }
    
    return new Car(result);
  }
}