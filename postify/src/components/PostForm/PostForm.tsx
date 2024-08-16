
import React from 'react';
import { useForm, FieldValues  } from 'react-hook-form';
import Post from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationScheme } from './schema';
import { v4 as uuidv4 } from 'uuid';
import styles from "./PostForm.module.css"

interface PostFormProps {
  addPost: (newPost: Post) => void;
  addToLocalStorage(newPost: Post): void;
}

const PostForm: React.FC<PostFormProps> = ({ addPost, addToLocalStorage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Post>({
    resolver: zodResolver(validationScheme),
    
  });

  const onSubmit = (e: FieldValues) => {
    const newPost: Post= {
      userid: uuidv4(),
      id: uuidv4(),
      title: e.title,
      body: e.body,
      likes: 0,
     
  
    };
    addPost(newPost);
    addToLocalStorage(newPost);
    
    reset();
  };

  return (
    <form  className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
         Post title <span className="text-danger"></span>
        </label>
        <input
          {...register("title")}
          type="text"
          className="form-control"
          id="taskName"
        />

        {errors.title && <p className="text-danger">{errors.title.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
        Post
        </label>
        
        <textarea
          {...register("body")}
          
          className="form-control"
          id="description"
          
          ></textarea>
        {errors.body && <p>{errors.body.message}</p>}
      </div>
      
     
      <button type="submit"className={styles.submitButton}>
       Post
      </button>
    </form>
  
  );
};

 export default PostForm;
