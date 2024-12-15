import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) { }

    @Post()
    async create(
        @Body('content') content: string,
        @Body('author') author: string,
        @Body('imageUrl') imageUrl: string,
    ) {
        try {
            const comments = await this.commentsService.create(content, author, imageUrl);
            return {
                success: true,
                data: comments,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Không tạo được lời chúc',
            };
        }

    }

    @Get()
    async findAll() {
        try {
            const comments = await this.commentsService.findAll();
            return {
                success: true,
                data: comments,
            };
        } catch (error) {
            return {
                success: false,
                message: error.message || 'Không lấy được lời chúc',
            };
        }
    }
}

