import { useEffect } from "react";
import { useState } from "react";

export default function Posts() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);


    return (
        <div>
        <h3>Posts:  </h3>
        </div>
    );
    }

    /* 

    1. Create a state to store the data 
    2. create useEffect with no dependencies 
    3. fetch to load data from the API 



    */