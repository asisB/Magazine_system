import { Link } from 'react-router-dom'
 
const Navbar = () => {
    return (
        <nav className="navbar">
          <h1>IT In The Valley</h1>
          <div className="links">
              <Link to="/">Home</Link>
            <Link to="/createArticle" style={{ 
              color: 'white', 
              backgroundColor: '#f1356d',
              borderRadius: '8px' 
            }}>Add Articles</Link>
            <Link to="/createPhotographs" style={{ 
              color: 'white', 
              backgroundColor: '#f1356d',
              borderRadius: '8px' 
            }}>Add Photographs</Link>
          </div> 
          
        </nav>
      );
}
 
export default Navbar;