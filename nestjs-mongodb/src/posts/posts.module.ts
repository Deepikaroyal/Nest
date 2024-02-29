import { Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Mongoose } from "mongoose";
import { PostSchema } from "src/schemas/Post.schema";
import { PostService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { Post } from "src/schemas/Post.schema";
import { User, userSchema } from "src/schemas/User.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Post.name,
                schema:PostSchema
            },
            {
                name: User.name,
                schema: userSchema
            }
        ])
    ],
    controllers:[PostsController],
    providers:[PostService]
})
export class PostsModule {

}