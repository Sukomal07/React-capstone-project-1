import axios from "axios";
import { useEffect, useRef, useState } from "react";

function MovieCard({ id, genre }) {
    const apiKey = import.meta.env.VITE_TMDB_API;
    const [movieData, setMovieData] = useState({
        name: genre,
        images: [],
    });
    const API_IMG = "https://image.tmdb.org/t/p/w200";
    const imagesDivRef = useRef(null);

    async function fetchData() {
        const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}`
        );
        const movies = res.data.results;
        const movieImages = movies.map((movie) => API_IMG + movie.poster_path);
        setMovieData({ ...movieData, images: movieImages });
    }

    useEffect(() => {
        fetchData();
    }, []);
    const displayedImages = movieData.images.slice(0, 4);
    return (
        <div className="movieCard">
            <h1 className="movieType">{movieData.name}</h1>
            <div className="imagesDiv" ref={imagesDivRef}>
                {displayedImages.length > 0 &&
                    displayedImages.map((image, index) => (
                        <div key={index} className="posterDiv">
                            <img src={image} alt="movie" className="movieImage" />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MovieCard;
