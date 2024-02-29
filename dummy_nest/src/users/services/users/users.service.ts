import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Anson', email: 'anson@yopmail.com' },
        { username: 'Ani', email: 'ani@yopmail.com' },
        { username: 'Anu', email: 'anu@yopmail.com' },
    ];
    fetchUsers() {
        return this.fakeUsers
    }

    createUser(userDetail: CreateUserType){
      this.fakeUsers.push(userDetail)
      return;
    }

    fetchUserById(id:number) {
    return {id,username: 'Anson', email: 'anson@yopmail.com'};
    }
}
