import { CReatePaymentDto } from 'src/dto/CreatePayment.dto';
export declare class PaymentsService {
    private users;
    createPayment(createPaymentDto: CReatePaymentDto): {
        id: number;
        status: string;
    };
}
