import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("inside validate pipe",value,metadata)

    const parseAgeToInteger = parseInt(value.age.toString());
    if(isNaN(parseAgeToInteger)){
      console.log(`${value.age} is not a number `);
      throw new HttpException('INvalid data Typr for property age',HttpStatus.BAD_REQUEST)
    }
    console.log(`${value.age} is a number `)
     return {...value ,age:parseAgeToInteger}
  }
}
