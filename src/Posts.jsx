import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h3>Posts: {posts.length} </h3>


      {
        posts.map((post) => ( <Post key={post.id} post={post} /> ))
      }
    </div>
  );
}

/* 

    1. Create a state to store the data 
    2. create useEffect with no dependencies 
    3. fetch to load data from the API 



    */
