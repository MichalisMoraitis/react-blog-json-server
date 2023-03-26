import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    axios.post(`http://localhost:8000/blogs`, {
      title,
      body,
      author
    })
    .then(()=>{
      setIsLoading(false);
      navigate('/');
      setError(null);
    })
    .catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }

  return (
    <div className="content">
        <form onSubmit={handleSubmit} className="create">
            <h2>Add a New Blog</h2>
            <label>Blog title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            
            <label>Blog body:</label>
            <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
            
            <label>Blog author:</label>
            <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)} />
            
            {!isLoading && <button>Add Blog</button>}
            {isLoading && <h3>Adding Blog....</h3>}
            {error && <h3 style={{color:"red"}}>Error {error}</h3>}
        </form>
    </div>
  );
}
 
export default Create;