import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MemberNavbar() {
    const member = useSelector((state) => state.members);

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
                            <Nav.Link as={Link} to="/movies">
                                Movies List
                            </Nav.Link>
                            <Nav.Link as={Link} to="/favourite">
                                Favourite Movies
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </React.Fragment>
            )}
        </Navbar>
    );
}
