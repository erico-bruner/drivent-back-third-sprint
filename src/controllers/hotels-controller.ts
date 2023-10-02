import { AuthenticatedRequest } from '@/middlewares';
import { hotelsService } from '@/services';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  const hotels = await hotelsService.getHotels();

  res.status(httpStatus.OK).send(hotels);
}
