import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import FullStar from "../../assets/images/full-star.png";
import { movieByID, unFavourite } from "../../redux/actions";
import DetailModal from "../Modal";

export default function Movies() {
    const favouriteMovies = useSelector(
        (state) => state.movies.favouriteMovies
    );
    const dispatch = useDispatch();
    const history = useHistory();
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
                {favouriteMovies.length > 0 &&
                    favouriteMovies.map((item) => {
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
                                        <img
                                            src={FullStar}
                                            alt="favourtie"
                                            onClick={() =>
                                                dispatch(
                                                    unFavourite(
                                                        item.imdbID,
                                                        history
                                                    )
                                                )
                                            }
                                        />
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
