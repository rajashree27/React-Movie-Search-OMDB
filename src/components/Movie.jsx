import React from "react";

const Movie = (props) => {
	const { Title, Year, imdbID, Type, Poster } = props.movie;
	console.log(Title);
	return (
		<div className="movieContainer">
			<img src={Poster} alt="poster" className="poster" />
			<div className="movieName">{Title}</div>
			<div className="movieInfo">
				<span>Year: {Year}</span>
				<span>Type: {Type}</span>
			</div>
		</div>
	);
};

export default Movie;
