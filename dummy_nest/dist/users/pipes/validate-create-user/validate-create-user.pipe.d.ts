import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
export declare class ValidateCreateUserPipe implements PipeTransform {
    transform(value: createUserDto, metadata: ArgumentMetadata): {
        age: number;
        username: string;
        email: string;
    };
}
