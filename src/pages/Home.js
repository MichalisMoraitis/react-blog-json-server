import BlogList from "./../components/BlogList";
import axios from 'axios'
// import { Link } from "react-router-dom";
import React, {useEffect, useState} from 'react';

const Home = () => {
  const [blogs,setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect( ()=>{
    setIsLoading(true);
    setError(null);
  
    axios.get(`http://localhost:8000/blogs`)
    .then((getData) => {
        setBlogs(getData.data);
        setIsLoading(false);
        setError(null);
    })
    .catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  },[])

  return (
    <div className="content">
        {error && <h3>Error: {error}</h3>}
        {/* {isLoading && <div>Loading... </div>} */}
        {isLoading && <span className="loader"/>}
        {isLoading && <span className="loader"/>}
        {isLoading && <span className="loader"/>}
        {!error && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;