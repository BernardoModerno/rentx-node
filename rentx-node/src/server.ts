import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());

app.use('/categories', categoriesRoutes);

app.use(express.json());

app.listen(3333);