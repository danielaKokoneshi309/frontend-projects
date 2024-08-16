import React from 'react';
import PostElement from '../PostElement/PostElement';
import Post from '../types';
import styles from './PostList.module.css'
interface PostListProps {
  posts: Post[];
  deletePost: (postId: string) => void;
  likePost: (postId: string) => void;
  
}

const PostList: React.FC<PostListProps> = ({ posts, deletePost, likePost }) => {
  return (
    <div className= {styles.tasksContainer}>
      {posts.map(post => (
        <PostElement key={post.id} post={post} deletePost={deletePost} likePost={likePost}   />
      ))}
    </div>
  );
};

export default PostList;