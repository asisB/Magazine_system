import BlogList from "./BlogList";
import PhotographerList from "./PhotographerList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error } = useFetch('http://localhost:3001/journalist/');
    const {data: photographs, isPending, errors} = useFetch('http://localhost:3001/photographer/')

    return (
        <div className="home">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading...</div>}
          {blogs && <BlogList blogs={blogs} title="All Journalist Post!"/>}

          {errors && <div>{errors}</div>}
          {isPending && <div>Loading...</div>}
          {photographs && <PhotographerList photographs={photographs} titles="All Photograph Post!"/>}

        </div>
      );
}

export default Home;