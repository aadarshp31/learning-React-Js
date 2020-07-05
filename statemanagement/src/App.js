import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
	return (
    <MovieProvider>
      <div>
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
	);
}

export default App;
