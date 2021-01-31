import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <Navbar bg={'dark'}>
            <Navbar.Brand as={Link} to="/main">Content</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <Link to="/">Login</Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
