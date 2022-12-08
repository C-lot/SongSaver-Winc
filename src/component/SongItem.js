const SongItem = (props) => {
  return (
    <tr className="song-items">
      <td className="title">{props.title}</td>
      <td className="artist">{props.artist}</td>
      <td className="genre">{props.genre}</td>
      <td className="rating">{props.rating}</td>
    </tr>
  );
};

export default SongItem;
