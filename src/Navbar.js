import {Link} from 'react-router-dom';
export const Navbar =() => {
    return (

      <div className='navbar'> 
        <Link to="/"><h1> Home</h1> </Link>
        <Link to="menu"><h1>Menu</h1> </Link>
        <Link to="contact"><h1>Contact</h1>  </Link>
     </div>

    );  
}