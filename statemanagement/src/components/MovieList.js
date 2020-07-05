import React, { useState } from "react";
import Movie from "./Movie";
import Nav from "./Nav";

const MovieList = () => {
	const [movies, setMovies] = useState([
		{
			name: "The Dark Knight",
			price: "Rs. 100",
			id: 12345,
		},
		{
			name: "The Killing Joke",
			price: "Rs. 50",
			id: 12346,
		},
		{
			name: "Joker",
			price: "Rs. 40",
			id: 12347,
		},
	]);
	return (
		<div>
			{movies.map((movie) => (
				<Movie name={movie.name} price={movie.price} key={movie.id} />
			))}
		</div>
	);
};

export default MovieList;
