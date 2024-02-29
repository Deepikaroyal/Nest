import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { CreateUserDto } from "./dto/CreateUsers.dto";
import { updateUserDto } from "./dto/UpdateUser.dto";
import { UserSetting } from "src/schemas/UserSetting.schema";

@Injectable()
export class UserService{
 constructor(@InjectModel(User.name) private userModel: Model<User>,
 @InjectModel(UserSetting.name) private userSettingModel: Model<UserSetting>,
 ) {}

async createUser({settings,...createUserDto}:CreateUserDto) {
   if(settings){
   const newSettings = new this.userSettingModel(settings)
   const saveNewSettings = await newSettings.save();
   const newUser = new this.userModel({
      ...createUserDto,
      settings: saveNewSettings._id,
   });
   return newUser.save()
}
const newUser = new this.userModel(createUserDto);
return newUser.save();
}
 getUser() {
    return this.userModel.find().populate(['settings','posts'])
 }

 getUserById(id:string){
   return this.userModel.findById(id).populate('settings')
 }

 updateUser(id: string, updateUserDto:updateUserDto) {
 return this.userModel.findByIdAndUpdate(id,updateUserDto,{new: true})
 }
 deleteUser(id:string) {
    return this.userModel.findByIdAndDelete(id);
 }
}