import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function NavBar() {

    const {isLogged,user} = useSelector(state => state.user)
    return (
        <Navbar bg={'dark'}>
            <Navbar.Brand as={Link} to="/main">Content</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                {user.name&&isLogged?<Navbar.Text>
                    Signed in as: {user.name}
                </Navbar.Text>:<Navbar.text><Link to="/">Login</Link></Navbar.text>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
