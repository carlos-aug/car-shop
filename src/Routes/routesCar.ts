import { Router } from 'express';
import CarController from '../Controllers/carController';

const routesCar = Router();

routesCar.post('/', (req, res, next) =>
  new CarController(req, res, next).create());

routesCar.get('/', (req, res, next) =>
  new CarController(req, res, next).findAll());

routesCar.get('/:id', (req, res, next) =>
  new CarController(req, res, next).findById());

routesCar.put('/:id', (req, res, next) =>
  new CarController(req, res, next).updateCarById());

export default routesCar;
