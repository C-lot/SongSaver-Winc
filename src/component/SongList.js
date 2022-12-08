import React from "react";
import SongItem from "./SongItem";

const SongList = (props) => {
  const items = props.songs.map((song) => (
    <SongItem
      key={song.id}
      title={song.title}
      artist={song.artist}
      genre={song.genre}
      rating={song.rating}
    />
  ));

  return (
    <div>
      <table style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row_item">Title</th>
            <th className="song-row_item">Artist</th>
            <th className="song-row_item">Genre</th>
            <th className="song-row_item">Rating</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
};

export default SongList;
