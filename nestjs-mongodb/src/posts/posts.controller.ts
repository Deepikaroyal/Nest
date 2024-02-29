import { Controller, Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreatePostDto } from "./dtos/CreatePost.dto";
import { PostService } from "./posts.service";

@Controller('posts')
export class PostsController {
   constructor(private postService: PostService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createPost(@Body() createPostDto: CreatePostDto){
        return this.postService.createPost(createPostDto)
    }
}