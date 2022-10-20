import axios from "axios";
import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import MovieInfoComponent from "./components/MovieInfoComponent";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [timeoutID, setTimeoutID] = useState();
	const [movieList, setMovieList] = useState([]);
	const [selectedMovie, onMovieSelect] = useState();

	const fetchData = async (movieName) => {
		const res = await axios.get(
			`https://www.omdbapi.com/?s=${movieName}&apikey=5fed4050`
		);
		console.log(res);
		setMovieList(res.data.Search);
	};

	const changeHandler = (e) => {
		// for debouncing
		clearTimeout(timeoutID);
		setSearchQuery(e.target.value);
		const timeout = setTimeout(() => fetchData(e.target.value), 500);
		setTimeoutID(timeout);
	};
	// console.log(searchQuery)
	return (
		<div className="container">
			<div className="header">
				<div>🎥 Movie Search</div>
				<div className="searchBox">
					<img src="/search-icon.svg" className="searchIcon"></img>
					<input
						type="text"
						className="searchInput"
						placeholder="Enter movie name"
						value={searchQuery}
						onChange={changeHandler}
					/>
				</div>
			</div>
			{selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
			<div className="movieListContainer">
				{movieList?.length
					? movieList.map((movie, ind) => (
							<Movie key={ind} movie={movie} onMovieSelect={onMovieSelect} />
					  ))
					: "Search any movie..."}
			</div>
		</div>
	);
}

export default App;
