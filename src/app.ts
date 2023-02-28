import express from 'express';
import routesCar from './Routes/routesCar';
import routesMotorcycles from './Routes/routesMotorcycles';

const app = express();

app.use(express.json());

app.use('/cars', routesCar);
app.use('/motorcycles', routesMotorcycles);

export default app;
