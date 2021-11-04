import express from 'express';
import "./connection";

const app = express();

import routes from './routes';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3333);
