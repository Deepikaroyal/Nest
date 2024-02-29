import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): {
        username: string;
        email: string;
    }[];
    getUserPosts(): {
        username: string;
        email: string;
        post: {
            id: number;
            title: string;
        }[];
    }[];
    getUserById(id: number): {
        id: number;
        username: string;
        email: string;
    };
    createUser(userPayload: createUserDto): void;
}
