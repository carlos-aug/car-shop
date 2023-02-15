import { Router } from 'express';
import CarController from '../Controllers/carController';

const routes = Router();

routes.post('/', (req, res, next) =>
  new CarController(req, res, next).create());

routes.get('/', (req, res, next) =>
  new CarController(req, res, next).findAll());

routes.get('/:id', (req, res, next) =>
  new CarController(req, res, next).findById());

export default routes;
