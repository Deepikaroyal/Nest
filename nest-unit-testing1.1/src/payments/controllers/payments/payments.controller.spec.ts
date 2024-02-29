import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';
import { Request, Response } from 'express';
import { PaymentsService } from '../../services/payments/payments.service';
import { describe } from 'node:test';
import { BadRequestException } from '@nestjs/common';

describe('PaymentsController', () => {
  let controller: PaymentsController;
  let paymentService: PaymentsService

  const statusResponseMock = {
    send: jest.fn((x) => x),
  };
  const responseMock = {
    status: jest.fn((x) => statusResponseMock),
    send: jest.fn((x) => x),
  } as unknown as Response;

  const requestMock = {
    query: {},
  } as unknown as Request;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers:[
        {
          provide: 'PAYMENTS_SERVICE',
          useClass:PaymentsService
          //useValue: jest.fn((x) => x),
        },
      ]
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
    paymentService = module.get<PaymentsService>('PAYMENTS_SERVICE')  
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('paymentSErvice should be defined', () => {
    expect(controller).toBeDefined();
  });  

  describe('getPayments', () => {
    it('should  return a status of 400', async() => {
     await controller.getPayments(requestMock, responseMock);
      expect(responseMock.status).toHaveBeenCalledWith(400);
      expect(statusResponseMock.send).toHaveBeenCalledWith({
        msg: 'Missing count or page query parameter',
      });
    });
    it('should return a status of 200 when query params are present', async() => {
      requestMock.query = {
      count: '10',
      page: '1',
      };
     await controller.getPayments (requestMock, responseMock);
      expect(responseMock.send).toHaveBeenCalledWith(200);
    });
  });
  describe('createPayment', () => {
    it('should throw an error', async() => {
      jest.spyOn(paymentService, 'createPayment').mockImplementationOnce(() =>  {
        throw new  BadRequestException();
      })
      try{
      const response = await controller.createPayment({
        email: 'Jolly@yopmail.com',
        price: 100
      })
    } catch(err) {
      console.log(err); 
    }
    })
  })
});
