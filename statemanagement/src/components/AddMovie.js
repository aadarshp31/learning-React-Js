import React, { useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const AddMovie = () => {
	const [movies, setMovies] = useContext(MovieContext);
	const [formData, setFormData] = useState({
		name: "",
		price: "",
		id: movies[movies.length - 1].id + 1,
	});

	//destructuring
	const { name, price, id } = formData;

	const handleChange = (fieldName) => (e) => {
		fieldName === "price"
			? setFormData({ ...formData, [fieldName]: "Rs. " + e.target.value })
			: setFormData({ ...formData, [fieldName]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setMovies([...movies, formData]);
		setFormData({
			name: "",
			price: "",
			id: id + 1,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Movie Name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={handleChange("name")}
				required={true}
			/>
			<br />
			<label htmlFor="price">Price</label>
			<input
				type="number"
				name="price"
				id="price"
				value={price.slice(4)}
				onChange={handleChange("price")}
				required={true}
			/>
			<br />
			<label htmlFor="id">ID</label>
			<input
				type="number"
				name="id"
				id="id"
				value={id}
				disabled={true}
				required={true}
			/>
			<br />
			<button>Create Movie</button>
		</form>
	);
};

export default AddMovie;
