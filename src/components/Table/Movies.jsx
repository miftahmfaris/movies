import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import EmptyStar from "../../assets/images/empty-star.png";
import FullStar from "../../assets/images/full-star.png";
import { favourite } from "../../redux/actions";

export default function Movies() {
    const movies = useSelector((state) => state.movies.allMovies);
    const dispatch = useDispatch();
    const history = useHistory();

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
                {movies.length > 0 &&
                    movies.map((item) => {
                        return (
                            <tr key={item.imdbID}>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                                <td>{item.Type}</td>
                                <td>
                                    <div
                                        style={{ textAlign: "center" }}
                                        onClick={() =>
                                            dispatch(
                                                favourite(item.imdbID, history)
                                            )
                                        }
                                    >
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
