import { Controller, Post, Get, Body, UsePipes, ValidationPipe, Param, HttpException, HttpStatus, Patch, Delete} from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/CreateUsers.dto";
import mongoose from "mongoose";
import { updateUserDto } from "./dto/UpdateUser.dto";

@Controller('users')
export class UserController{
    constructor(private userService: UserService){}

 @Post()
 @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto:CreateUserDto) {
        console.log(createUserDto)
        return this.userService.createUser(createUserDto)

    }

    @Get()
    getUsers() {
     return this.userService.getUser()
    }

    @Get(':id')
    async getUserById(@Param('id') id:string) {
        //do it in middleware otherwise
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new HttpException('user not found',HttpStatus.NOT_FOUND)
        const findUser = await this.userService.getUserById(id)
        if(!findUser) throw new HttpException('user not found',HttpStatus.NOT_FOUND)
     return findUser
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateUser(@Param('id') id:string, @Body() updateUserDto: updateUserDto){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException('Invalid Id',HttpStatus.NOT_FOUND)
       const updateUser =  await this.userService.updateUser(id,updateUserDto)
       if(!updateUser) throw new HttpException('User not found',HttpStatus.NOT_FOUND)
      return updateUser;
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if(!isValid) throw new HttpException('Invalid Id',HttpStatus.NOT_FOUND)
        const deleteUser=  await this.userService.deleteUser(id)
        if(!deleteUser) throw new HttpException('User not found',HttpStatus.NOT_FOUND)
      return deleteUser;
    }

}
