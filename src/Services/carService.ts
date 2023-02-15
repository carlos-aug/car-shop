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
    console.log(result);
    if (!result) {
      return null;
    }

    // const resultId = {
    //   id: result?.id,
    //   model: result?.model,
    //   year: result?.year,
    //   color: result?.color,
    //   status: result?.status,
    //   buyValue: result?.buyValue,
    //   doorsQty: result?.doorsQty,
    //   seatsQty: result?.seatsQty,
    // };
    // return resultId;
    return new Car(result);
  }
}