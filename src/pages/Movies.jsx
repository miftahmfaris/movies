import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { SearchForm, TableMovies } from "../components";

export default function Movies() {
    return (
        <Container>
            <section>
                <h1 style={{ textAlign: "center" }}>Search Movies here</h1>
            </section>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <section>
                        <SearchForm />
                    </section>
                </Col>
            </Row>
            <section>
                <TableMovies />
            </section>
        </Container>
    );
}
