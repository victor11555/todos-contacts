import React, {useEffect} from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {getProfileAC, getProfileFailure} from "../../redux/actionCreators";
import { useDispatch } from 'react-redux'


function NavBar() {
    useEffect(() => {
        dispatch(getProfileAC())
    }, [])
  const { isLogged, user } = useSelector((state) => state.user);
  const  dispatch = useDispatch()
  return (
    <Navbar bg={"dark"}>
      <Navbar.Brand as={Link} to="/main">
        Content
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {user && isLogged ? (
          <p>
            Signed in as: {user.name}
            <Navbar.Brand onClick={() => dispatch(getProfileFailure())} as={Link} to="/main">
              Log Out
            </Navbar.Brand>
          </p>
        ) : (
          <p>
            <Link to="/login">Login</Link>
          </p>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
