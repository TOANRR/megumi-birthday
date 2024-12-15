import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comment extends Document {
    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    author: string;

    @Prop({ default: Date.now })
    createdAt: Date;
    @Prop({ required: false })
    imageUrl: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
