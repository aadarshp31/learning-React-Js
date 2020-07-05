import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
	return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>;
};
