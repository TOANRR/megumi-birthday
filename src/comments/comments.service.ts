import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './schemas/comment.schema/comment.schema';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comment.name) private readonly commentModel: Model<Comment>,
    ) { }

    async create(content: string, author: string, imageUrl: string): Promise<Comment> {
        const newComment = new this.commentModel({ content, author, imageUrl });
        return newComment.save();
    }

    async findAll(): Promise<Comment[]> {
        return this.commentModel.find().sort({ createdAt: -1 }).exec();
    }
}
