import React from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = ({ loggedIn }) => {
    const click = (e) => {
        const name = e.target
        console.log(`clicked ${name}`)
        console.log(e.target)
    }
    return (
        <div className='NavBar'>
            <Navbar expand="md">
                <Link to="/" className="navbar-brand" name='Jobly' onClick={click}>
                    Jobly
                </Link>

                
                {loggedIn ?
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/companies" onClick={click}>Companies</NavLink>
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