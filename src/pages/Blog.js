import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog,setBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( ()=>{
        setIsLoading(true);
        setError(false);

        axios.get(`http://localhost:8000/blogs/${id}`)
        .then((getData) => {
            setBlog(getData.data);
            setIsLoading(false);
            setError(null);
        })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
      },[id])

    const handleClick = () => {
        if (window.confirm("Delete?")){

            axios.delete(`http://localhost:8000/blogs/${id}`)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                alert(err.message);
            })
        }
    }

    const setData = (blog) => {
        // console.log(blog)
        localStorage.setItem('ID', blog.id);
        localStorage.setItem('title', blog.title);
        localStorage.setItem('body', blog.body);
        localStorage.setItem('author', blog.author);
    }

    return(
        <div className="content">
            <div className="blog-details" >
                {/* {isLoading && <div>Loading...</div>} */}
                {isLoading && <div><span className="loader"/></div>}
                {error && <h3>Error: {error}</h3>}
                { !error && (
                    <article>
                        <h2>{ blog.title }</h2>
                        <p>{ blog.body }</p>
                        <div>
                            <h4>Written by { blog.author }</h4 >
                            <Link to={`/update/${blog.id}`}>
                                <button className="update" onClick={()=>{setData(blog)}}>Update</button>
                            </Link> 
                            <button className="delete" onClick={handleClick}>Delete</button>
                            </div>
                    </article>
                )}
            </div>
        </div>
    );
}

export default Blog