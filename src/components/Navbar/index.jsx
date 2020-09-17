import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { logout } from "../../redux/actions";

export default function MemberNavbar() {
    const member = useSelector((state) => state.members);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/movies">
                Your-Movies
            </Navbar.Brand>
            {member.name !== undefined && (
                <React.Fragment>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>

                        <Nav>
                            <Nav.Link
                                style={{
                                    background: "white",
                                    color: "black",
                                    borderRadius: "10px",
                                }}
                                href="#/"
                            >
                                Hi, {member.name}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/movies">
                                Movies List
                            </Nav.Link>
                            <Nav.Link as={Link} to="/favourite">
                                Favourite Movies
                            </Nav.Link>
                            <Nav.Link
                                to="#/"
                                onClick={() => dispatch(logout(history))}
                            >
                                Exit
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </React.Fragment>
            )}
        </Navbar>
    );
}
