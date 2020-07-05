import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "../contexts/MovieContext"

const MovieList = () => {
	const [movies] = useContext(MovieContext)
	return (
		<div>
			{movies.map((movie) => (
				<Movie name={movie.name} price={movie.price} id={movie.id} key={movie.id} />
			))}
		</div>
	);
};

export default MovieList;
