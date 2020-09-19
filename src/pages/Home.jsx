import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LoginForm } from "../components";

export default function Home() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <section>
                        <h1 style={{ textAlign: "center" }}>
                            Welcome to Your-Movies
                        </h1>
                        <LoginForm />
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
