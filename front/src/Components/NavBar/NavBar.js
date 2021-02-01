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
                {user.name&&isLogged?<p>
                        Signed in as: {user.name}
                    </p>:<p><Link to="/">Login</Link></p>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
