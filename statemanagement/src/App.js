import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./contexts/MovieContext";
import AddMovie from "./components/AddMovie";

function App() {
	return (
    <MovieProvider>
      <div>
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
	);
}

export default App;
