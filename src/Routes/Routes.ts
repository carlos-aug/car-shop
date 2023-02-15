import { Router } from 'express';
import CarController from '../Controllers/carController';

const routes = Router();

routes.post('/', (req, res, next) => new CarController(req, res, next).create());

export default routes;