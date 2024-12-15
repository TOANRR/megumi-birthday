import { CommentSchema } from './comment.schema';

describe('CommentSchema', () => {
  it('should be defined', () => {
    expect(new CommentSchema()).toBeDefined();
  });
});
