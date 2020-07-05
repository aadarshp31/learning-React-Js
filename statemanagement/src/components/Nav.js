import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="Nav">
            <h3 className="Nav-brand">Movie Count: {movies.length}</h3>
            <div className="Nav-link-parent">
                <p className="Nav-link">link</p>
                <p className="Nav-link">link</p>
                <p className="Nav-link">link</p>
            </div>
        </div>
    );
}

export default Nav;