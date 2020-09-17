import React from "react";
import { Container, Row } from "react-bootstrap";

import { LoginForm } from "../components";

export default function Home() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <section>
                    <h1 style={{ textAlign: "center" }}>
                        Welcome to Your-Movies
                    </h1>
                    <LoginForm />
                </section>
            </Row>
        </Container>
    );
}
