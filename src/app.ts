import express from 'express';
import routes from './Routes/routesCar';
import routesMotorcycles from './Routes/routesMotorcycles';

const app = express();

app.use(express.json());

app.use('/cars', routes);
app.use('/motorcycles', routesMotorcycles);

export default app;
