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

    const scrollLeft = () => {
        if (imagesDivRef.current) {
            imagesDivRef.current.scrollLeft -= 250;
        }
    };

    const scrollRight = () => {
        if (imagesDivRef.current) {
            imagesDivRef.current.scrollLeft += 250;
        }
    };

    return (
        <div className="movieCard">
            <h1 className="movieType">{movieData.name}</h1>
            <button onClick={scrollRight} className="rightBtn">{">"}</button>
            <button onClick={scrollLeft} className="leftBtn">{"<"}</button>
            <div className="imagesDiv" ref={imagesDivRef}>
                {movieData.images.length > 0 &&
                    movieData.images.map((image, index) => (
                        <div key={index} className="posterDiv">
                            <img src={image} alt="movie" className="movieImage" />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default MovieCard;
