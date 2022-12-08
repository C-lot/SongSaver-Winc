import React from "react";
import { useState } from "react";

const InputField = (props) => {
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [genre, setGenre] = useState();
  const [rating, setRating] = useState();

  const song = {
    title: title,
    artist: artist,
    genre: genre,
    rating: rating,
  };

  return (
    <form
      className="input"
      onSubmit={(e) => props.addSong(e, song)}
      name="SongInput"
    >
      <label name="title">
        Title
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </label>
      <label name="artist">
        Artist
        <input
          type="text"
          name="artist"
          onChange={(e) => setArtist(e.target.value)}
        ></input>
      </label>
      <label name="genre">
        Genre
        <input
          type="text"
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        ></input>
      </label>
      <label name="rating">
        Rating
        <select
          style={{ minWidth: "30px" }}
          onChange={(e) => setRating(e.target.value)}
        >
          <option name="value">Please choose a value</option>
          <option name="1">1</option>
          <option name="2">2</option>
          <option name="3">3</option>
          <option name="4">4</option>
          <option name="5">5</option>
        </select>
      </label>
      <button>Add Song</button>
    </form>
  );
};

export default InputField;
