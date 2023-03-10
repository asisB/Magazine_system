
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id } = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:3001/journalist/' + id);

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                     <p>{blog.body}</p>
                     <p>{blog.email}</p>
                     <p>{blog.balance}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;