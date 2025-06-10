import express from 'express';
import { getPosts, createPost } from '../controllers/postController';

const router = express.Router();
// router.get('/', getPosts);
// router.post('/', createPost);
router.get('/', getPosts);
router.post('/', createPost);
export default router;
