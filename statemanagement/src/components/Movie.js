import React from "react";

const Movie = ({ name, price, id }) => {
	return (
		<div className="Movie-component">
			<div className="movie-tile-header">
				<div>ID</div>
				<div>Name</div>
				<div>Price</div>
			</div>
			<div className="movie-tile">
				<div>{id}</div>
				<div>{name}</div>
				<div>{price}</div>
			</div>
		</div>
	);
};

export default Movie;
