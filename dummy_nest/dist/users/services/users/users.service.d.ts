import { CreateUserType } from 'src/utils/types';
export declare class UsersService {
    private fakeUsers;
    fetchUsers(): {
        username: string;
        email: string;
    }[];
    createUser(userDetail: CreateUserType): void;
    fetchUserById(id: number): {
        id: number;
        username: string;
        email: string;
    };
}
