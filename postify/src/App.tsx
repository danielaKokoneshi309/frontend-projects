import React, { useState, useEffect } from "react";
import axios from "axios";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import Post from "./components/types";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    if (storedPosts.length === 0) {
      fetchPosts();
    } else {
      setPosts(storedPosts);
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/users/1/posts"
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async (newPost: Post) => {
    try {
      const response = await axios.post<Post>(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setPosts([response.data, ...posts]);
      addToLocalStorage(response.data);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      updateLocalStorage(updatedPosts);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const addToLocalStorage = (newPost: Post) => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = [newPost, ...storedPosts];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updateLocalStorage = (updatedPosts: Post[]) => {
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const likePost = (id: string) => {
    const updatedPosts = posts.map((post) => {
      console.log(post);
      return post.id === id ? { ...post, likes: post.likes + 1 } : post;
    });
    setPosts(updatedPosts);
    updateLocalStorage(updatedPosts);
  };

  return (
    <div className="App">
      <PostForm addPost={addPost} addToLocalStorage={addToLocalStorage} />
      <PostList posts={posts} deletePost={deletePost} likePost={likePost} />
    </div>
  );
};

export default App;
