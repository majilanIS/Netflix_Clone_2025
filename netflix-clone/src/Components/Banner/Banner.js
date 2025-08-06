import React, { useEffect, useState } from 'react'
import requests from '../../utils/request'
import axios from '../../utils/axios'

//import css
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals)
        const results = request.data.results
        const randomIndex = Math.floor(Math.random() * results.length)
        setMovie(results[randomIndex])
      } catch (error) {
        console.error('Error fetching Netflix Originals:', error)
      }
    }

    fetchData()
  }, [])

  // Helper function to truncate long text
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '…' : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="banner-content">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button-play">Play</button>
          <button className="banner-button">My List</button>
        </div>

        <h1 className="banner-description">
          {truncate(movie?.overview, 100)}
        </h1>
      </div>

      {/* Optional: add a fade at bottom */}
      <div className="banner-fadeBottom" />
    </header>
  )
}

export default Banner
