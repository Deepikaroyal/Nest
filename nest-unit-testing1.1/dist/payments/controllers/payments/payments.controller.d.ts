import { Request, Response } from 'express';
import { CReatePaymentDto } from 'src/dto/CreatePayment.dto';
import { PaymentsService } from 'src/payments/services/payments/payments.service';
export declare class PaymentsController {
    private readonly paymentService;
    constructor(paymentService: PaymentsService);
    getPayments(request: Request, response: Response): void;
    createPayment(createPayment: CReatePaymentDto): {
        id: number;
        status: string;
    };
}
