import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: string; 
  private engineCapacity: number;
  
  constructor(newMotorcycle: IMotorcycles) {
    super(newMotorcycle);
    
    this.category = newMotorcycle.category;
    this.engineCapacity = newMotorcycle.engineCapacity;
  }
}
