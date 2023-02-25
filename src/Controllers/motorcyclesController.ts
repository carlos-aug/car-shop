import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/motorcyclesService';

export default class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const moto: IMotorcycles = this.req.body;

    try {
      const newMotorcycles = await this.service.create(moto);
      return this.res.status(201).json(newMotorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAll() {
    const result = await this.service.findAll();
    return this.res.status(200).json(result);
  }

  public async findById() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    try {
      const result = await this.service.findById(id);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotoById() {
    const { id } = this.req.params;
    const { body } = this.req;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    try {
      const result = await this.service.updateMotoById(id, body);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
