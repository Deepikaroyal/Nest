import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/dto/CreatePayment.dto';

@Injectable()
export class PaymentsService {
  private users = [
    {
      email: 'Joe@yopmail.com',
    },
    {
      email: 'Jolly@yopmail.com',
    },
    {
      email: 'Josph@yopmail.com',
    },
  ];

  createPayment(createPaymentDto: CreatePaymentDto) {
    const { email } = createPaymentDto;
    const user = this.users.find((email) => user.email === email);
    if (user) {
      return {
        id: 1,
        status: 'success',
      };
    } else {
      throw new BadRequestException();
    }
  }
}
