import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

import EmptyStar from "../../assets/images/empty-star.png";
import FullStar from "../../assets/images/full-star.png";

export default function Movies() {
    const favouriteMovies = useSelector(
        (state) => state.movies.favouriteMovies
    );

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Favourite</th>
                </tr>
            </thead>
            <tbody>
                {favouriteMovies.length > 0 &&
                    favouriteMovies.map((item) => {
                        return (
                            <tr key={item.imdbID}>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                                <td>{item.Type}</td>
                                <td>
                                    <div style={{ textAlign: "center" }}>
                                        {item.favourite !== undefined &&
                                        item.favourite ? (
                                            <img
                                                src={FullStar}
                                                alt="favourtie"
                                            />
                                        ) : (
                                            <img
                                                src={EmptyStar}
                                                alt="non-favourite"
                                            />
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
