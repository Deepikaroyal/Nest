import { Controller, Get, Inject, Req, Res, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreatePaymentDto } from '../../../dto/CreatePayment.dto';
import { PaymentsService } from '../../services/payments/payments.service';

//import { PaymentsService } from 'src/payments/services/payments/payments.service';
@Controller('payments')
export class PaymentsController {
  constructor(
    @Inject('PAYMENTS_SERVICE')
    private readonly paymentService: PaymentsService,
  ) {}

  @Get()
  getPayments(@Req() request: Request, @Res() response: Response) {
    const { count, page } = request.query;
    if (!count || !page) {
      response
        .status(400)
        .send({ msg: 'Missing count or page query parameter' });
    } else {
      response.send(200);
    }
  }

  @Post('create')
  async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
    //try {
      const response =  await this.paymentService.
      createPayment(createPaymentDto);
      return response;
   // } catch (err) {}
  }
}
