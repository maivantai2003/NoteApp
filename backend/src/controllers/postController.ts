import { Request, Response } from 'express';
import { Post } from '../models/Post';

export const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find().populate('authorId');
  res.json(posts);
};

export const createPost = async (req: Request, res: Response) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
};