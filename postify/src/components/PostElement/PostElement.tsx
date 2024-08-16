import React from 'react';
import Post
 from '../types';
 import { AiOutlineHeart } from "react-icons/ai";
 import styles from "./PostElement.module.css";

interface PostItemProps {
  post: Post;
  deletePost: (postId: string) => void;
  likePost: (postId: string) => void;

}

const PostElement: React.FC<PostItemProps> = ({ post, deletePost, likePost }) => {
  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleLike = () => {
    likePost(post.id);

  };
  
  
  return (
    <div className={styles.formContainer}>
       
      <h3>{post.title}</h3>
      <p>{post.body}</p>
   
     
      <button onClick={handleLike} className='btn-light'><AiOutlineHeart color="#ff6b81" size={20} />{post.likes} </button>
    
      <div className='button-class'>
      <button onClick={handleDelete} className='btn-light'>Delete</button>
      </div>
      </div>
  );
};


export default PostElement;