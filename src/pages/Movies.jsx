import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SearchForm } from "../components";

export default function Movies() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <section>
                        <h1 style={{ textAlign: "center" }}>
                            Search Movies here
                        </h1>
                        <SearchForm />
                    </section>
                </Col>
            </Row>
        </Container>
    );
}
