import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import EmptyStar from "../../assets/images/empty-star.png";
import FullStar from "../../assets/images/full-star.png";
import { favourite, unFavourite, movieByID } from "../../redux/actions";
import DetailModal from "../Modal";

export default function Movies() {
    const movies = useSelector((state) => state.movies.allMovies);
    const dispatch = useDispatch();
    const history = useHistory();
    const { pathname } = useLocation();
    const path = pathname.split("/")[1];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Type</th>
                    <th>Detail</th>
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
                                    <span
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            handleShow();
                                            dispatch(movieByID(item.imdbID));
                                        }}
                                    >
                                        Click
                                    </span>
                                </td>
                                <td>
                                    <div style={{ textAlign: "center" }}>
                                        {item.favourite !== undefined &&
                                        item.favourite ? (
                                            <img
                                                src={FullStar}
                                                alt="favourtie"
                                                onClick={() =>
                                                    dispatch(
                                                        unFavourite(
                                                            item.imdbID,
                                                            history,
                                                            path
                                                        )
                                                    )
                                                }
                                            />
                                        ) : (
                                            <img
                                                src={EmptyStar}
                                                alt="non-favourite"
                                                onClick={() =>
                                                    dispatch(
                                                        favourite(
                                                            item.imdbID,
                                                            history
                                                        )
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                <DetailModal show={show} handleClose={handleClose} />
            </tbody>
        </Table>
    );
}
