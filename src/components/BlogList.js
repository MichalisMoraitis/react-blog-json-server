import { Link } from "react-router-dom"

const BlogList = ({ blogs=null, title=null}) => {
    if (blogs.length <= 0) title= "No Post Found"
    return(
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList