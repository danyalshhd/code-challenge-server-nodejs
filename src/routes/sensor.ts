import express, { Request, Response } from 'express';
const router = express.Router();
import { param } from 'express-validator';
import { validateRequest, BadRequestError } from '@dstransaction/common';
import { axiosInstance } from '../axiosInstance';
import { SENSOR_TECH_ENDPOINT } from '../config';
import { ISensor } from '../dto/ISensor';

router.get('/v1/temperature/:id', [
  param('id')
    .trim()
    .notEmpty()
    .isInt()
    .withMessage('You must supply correct resource id'),
], validateRequest,
  async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
      const { data: quoteResult } = await axiosInstance.get(SENSOR_TECH_ENDPOINT(id));
      const response: ISensor = quoteResult;

      res.send(response);
    }
    catch (err: any) {
      throw new BadRequestError(err.message);
    }
  });

export { router as sensorRouter };
