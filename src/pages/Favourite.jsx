import React from "react";
import { Container } from "react-bootstrap";

import { TableFavouriteMovies } from "../components";

export default function Favourite() {
    return (
        <Container>
            <section>
                <h1 style={{ textAlign: "center" }}>Your Favourite Movies</h1>
            </section>
            <section>
                <TableFavouriteMovies />
            </section>
        </Container>
    );
}
