import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {Request,Response, query} from 'express';
import { createUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
//@UseGuards(AuthGuard)
export class UsersController {
 constructor(private userService:UsersService) {
 }  

 @Get()
 @UseGuards(AuthGuard)
 getUsers() {
   return this.userService.fetchUsers();
 }

//   @Get()
//   getUsers(@Query('sortDesc',ParseBoolPipe) sortDesc: boolean) {
//     console.log("###",sortDesc)
//     return [{ username: 'Anson', email: 'anson@yopmail.com' }];
//   }
  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Anson',
        email: 'anson@yopmail.com',
        post: [
          {
            id: 1,
            title: 'post-1',
          },
          { id: 2, 
           title: 'post-2'
         },
        ],
      },
    ];
  }

  @Get(':id')
  getUserById(@Param('id',ParseIntPipe) id: number){
  //console.log('##',id)
  const user = this.userService.fetchUserById(id)
  if(!user)  
  throw new HttpException("user not found",HttpStatus.BAD_REQUEST);
   return user
  //return {id}
  }

  @Post('createUser')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userPayload: createUserDto){
   //const {username, email} = userPayload
    // console.log("@@",username,email)
   return this.userService.createUser(userPayload);
    //return("User created")
    //const  {username,email} = request.body;
    //response.send('User created');

  }


}
