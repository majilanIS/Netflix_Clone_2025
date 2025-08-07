import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react';

// for movie-trailer
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

// import Row.css
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log('Trailer not found:', error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)} 
            className={`row-poster ${islargeRow ? "row-poster-large" : ""}`}
            src={
              movie.poster_path || movie.backdrop_path
                ? `${baseUrl}${islargeRow ? movie.poster_path : movie.backdrop_path}`
                : "https://via.placeholder.com/150"
            }
            alt={movie.name || movie.title}
          />
        ))}
      </div>
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{
            height: '390',
            width: '100%',
            playerVars: { autoplay: 1 },
          }}
        />
      )}
    </div>
  );
};

export default Row;
