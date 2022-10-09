import express from 'express';
import 'express-async-errors';
import { errorHandler, NotFoundError } from '@dstransaction/common';
import cors from 'cors';

import { sensorRouter } from './routes/sensor';

const app = express();
app.use(cors());

app.use(sensorRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };