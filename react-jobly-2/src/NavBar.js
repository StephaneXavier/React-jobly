import React, {useContext} from 'react';
import LoggedInContext from './LoggedInContext';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    const loggedIn = useContext(LoggedInContext)


    return (
        <div className='NavBar'>
            <Navbar expand="md">
                <Link to="/" className="navbar-brand" name='Jobly'>
                    Jobly
                </Link>

                
                {loggedIn ?
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/companies" >Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active to='/jobs'>Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profile </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/logout">Logout </NavLink>
                        </NavItem>
                    </Nav>
                    :
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink active to='/login'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active to='/register'>Register</NavLink>
                        </NavItem>
                    </Nav>
                }

            </Navbar>
        </div>
    )
}

export default NavBar