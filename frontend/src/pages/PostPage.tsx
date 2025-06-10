import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Post {
  _id?: string;
  title: string;
  content: string;
  authorId: string;
}

interface User {
  _id: string;
  name: string;
}

const PostPage: React.FC = () => {
  //const [posts, setPosts] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [newPost, setNewPost] = useState<Post>({ title: '', content: '', authorId: '' });

  useEffect(() => {
    //api.get('/posts').then(res => setPosts(res.data));
    api.get('/users').then(res => setUsers(res.data));
  }, []);

  const createPost = async () => {
    // const res = await api.post('/posts', newPost);
    // setPosts([...posts, res.data]);
    // setNewPost({ title: '', content: '', authorId: '' });
  };

  return (
    <div>
      <h2>Posts</h2>
      <input value={newPost.title} onChange={e => setNewPost({ ...newPost, title: e.target.value })} placeholder="Title" />
      <textarea value={newPost.content} onChange={e => setNewPost({ ...newPost, content: e.target.value })} placeholder="Content" />
      <select value={newPost.authorId} onChange={e => setNewPost({ ...newPost, authorId: e.target.value })}>
        <option value="">Select User</option>
        {users.map(user => <option key={user._id} value={user._id}>{user.name}</option>)}
      </select>
      <button onClick={createPost}>Add Post</button>

      {/* <ul>
        {posts.map(post => (
          <li key={post._id}><strong>{post.title}</strong> by {post.authorId?.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default PostPage;
