import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { LoginForm } from "../components";

export default function Home() {
    return (
        <Container>
            <section>
                <h1 style={{ textAlign: "center" }}>Welcome to Your-Movies</h1>
            </section>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <section>
                        <LoginForm />
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
