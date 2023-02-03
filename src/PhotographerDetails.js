import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PhotographerDetails = () => {

    const {id } = useParams();
    const {data: photograph, isPending, error} = useFetch('http://localhost:3001/photographer/' + id);

    return ( 
        <div className="photographs-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {photograph && (
                <photograph>
                    <h2>{photograph.title}</h2>
                     <p>{photograph.caption}</p>
                     <p>{photograph.email}</p>
                     <p>{photograph.location}</p>
                     <p>{photograph.balance}</p>
                     <img src={photograph.image} alt=""/>
                </photograph>
            )}
        </div>
     );
}
 
export default PhotographerDetails;