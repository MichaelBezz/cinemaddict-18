export type CommentId = string;

export type Comment = {
  id: CommentId;
  author: string;
  comment: string;
  date: string;
  emotion: string;
};

export type Comments = Comment[];
