import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 start-0 w-100">    
        <div className='container-fluid'>
            <Link className='navbar-brand' to="/Home">Home</Link>
            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to="/Login">Login</NavLink>
                </div>
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to="/Dashboard">Dashboard</NavLink>
                </div>
                <div className='navbar-nav'>
                    <NavLink className='nav-item nav-link' to="/About">About</NavLink>
                </div>
            </div>
        </div>
    </nav>
    )
}