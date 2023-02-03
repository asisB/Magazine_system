
const PhotographerList = ({photographs, titles}) => {
    return ( 
        <div className="photograph-list">
            <h2>{titles}</h2>
            {photographs.map((photograph) => (
                <div key={photograph.id} className="photograph-preview">
                    <h2>{photograph.title}</h2>
                    <p>{photograph.caption}</p>
                     <p>{photograph.email}</p>
                     <p>{photograph.balance}</p>
                     <img src={photograph.image} alt="Photographs"/>
                </div>
            ))}
        </div>
     );
}

export default PhotographerList;