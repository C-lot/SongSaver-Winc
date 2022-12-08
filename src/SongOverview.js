import React, { Component } from "react";
import InputField from "./component/InputField";
import SongList from "./component/SongList";
import Footer from "./Container/Footer";

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  addSong = (e, song) => {
    e.preventDefault();
    const checkValues = Object.values(song).includes(undefined);

    if (checkValues) {
      alert("Please fill in all the fields");
      return;
    }
    const id = this.state.songs.length + 1;
    this.setState({
      songs: [
        ...this.state.songs,
        {
          id: id,
          title: song.title,
          artist: song.artist,
          genre: song.genre,
          rating: song.rating,
        },
      ],
    });
    e.target.reset();
  };

  deleteSongs = () => {
    this.setState({
      songs: [],
    });
  };

  render() {
    return (
      <div>
        <InputField addSong={this.addSong} onClick={this.onClick} />
        <SongList songs={this.state.songs} />
        <Footer onClick={this.deleteSongs} />
      </div>
    );
  }
}
export default Songs;
