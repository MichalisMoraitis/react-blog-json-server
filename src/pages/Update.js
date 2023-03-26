import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const Update = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    axios.put(`http://localhost:8000/blogs/${id}`, {
        title,
        body,
        author
    })
    .then(()=>{
      setIsLoading(false);
      setError(null)
      navigate(`/blog/${id}`);
    })
    .catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    setTitle(localStorage.getItem('title'));
    setBody(localStorage.getItem('body'));
    setAuthor(localStorage.getItem('author'));
}, [])

  return (
    <div className="content">
        <form onSubmit={handleSubmit} className="create">
            <h2>Update Blog</h2>
            <label>Blog title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            
            <label>Blog body:</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
            
            <label>Blog author:</label>
            <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />
            
            {!isLoading && <button>Update Blog</button>}
            {isLoading && <h3>Updating Blog....</h3>}
            {error && <h3 style={{color:"red"}}>Error {error}</h3>}
        </form>
    </div>
  );
}
 
export default Update;