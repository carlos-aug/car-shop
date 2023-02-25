import { Router } from 'express';
import MotorcyclesController from '../Controllers/motorcyclesController';

const routesMotorcycles = Router();

routesMotorcycles.post('/', (req, res, next) =>
  new MotorcyclesController(req, res, next).create());

routesMotorcycles.get('/', (req, res, next) =>
  new MotorcyclesController(req, res, next).findAll());

routesMotorcycles.get('/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).findById());

routesMotorcycles.put('/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).updateMotoById());

export default routesMotorcycles;