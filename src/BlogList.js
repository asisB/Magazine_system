
const BlogList = ({blogs, title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {blogs.map((blog) => (
                <div key={blog.id} className="blog-preview">
                    <h2>{blog.title}</h2>
                     <p>{blog.body}</p>
                     <p>{blog.email}</p>
                     <p>{blog.balance}</p>
                </div>
             ))}
        </div>
     );
}
 
export default BlogList;