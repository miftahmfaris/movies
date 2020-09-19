import React from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function DetailMovie(props) {
    const movie = useSelector((state) => state.movies.movieByID);

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movie Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {movie.Poster === undefined ? (
                    <p>Loading...</p>
                ) : (
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col xs={12} md={6}>
                                <img
                                    style={{ width: "100%", margin: "10px 0" }}
                                    src={movie.Poster}
                                    alt="Poster"
                                />
                            </Col>
                            <Col xs={12} md={6}>
                                <div style={{ margin: "10px 0" }}>
                                    <p style={{ margin: 0 }}>
                                        Title: {movie.Title}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Year: {movie.Year}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Rated: {movie.Rated}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Released: {movie.Released}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Runtime: {movie.Runtime}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Genre: {movie.Genre}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Director:
                                        {movie.Director}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Writer:
                                        {movie.Writer.length > 15 &&
                                            `${movie.Writer.substring(
                                                0,
                                                15
                                            )}...`}
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        Actors: {movie.Actors}
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div style={{ margin: "10px 0" }}>
                                <Col>
                                    <p>Plot: {movie.Plot}</p>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
