import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, userSchema } from "src/schemas/User.schema";
import { UserService } from "./users.service";
import { UserController } from "./users.controller";
import { UserSetting,UserSettingSchema} from "src/schemas/UserSetting.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name:User.name,
            schema: userSchema,
        },
        {
          name: UserSetting.name,
          schema:UserSettingSchema
        },
    ])
    ],
    providers:[UserService],
    controllers:[UserController]
})
export class UserModule{}