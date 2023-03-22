import { useState } from "react";

export const fetchMovies = async (searchKey) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const type = searchKey ? "search" : "discover";
  const {
    data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
    params: {
      api_key: API_KEY,
      query: searchKey,
    },
  });

  setMovies(results);
  setMovie(results[0]);

  if (results.length) {
    await fetchMovie(results[0].id);
  }
};

export const fetchMovie = async (id) => {
  const { data } = await axios.get(`${API_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      append_to_response: "videos",
    },
  });

  if (data.videos && data.videos.results) {
    const trailer = data.videos.results.find(
      (vid) => vid.name === "Official Trailer"
    );
    setTrailer(trailer ? trailer : data.videos.results[0]);
  }
  //return data
  setMovie(data);
};
