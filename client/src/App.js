import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
 state = { songs: [] }
  componentDidMount() {
    //TODO make a call to our rails server to get Songs
  }

  addSong = (title) => {
    //TODO make api call to rails server to add item
    //TODO update state
  }

  updateSong = (id) => {
    //TODO make api call to update song
    //TODO update state
  }

  deleteSong = (id) => {
    //TODO make api call to delete song
    //TODO remove it from state
  }

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} updateSong={this.updateSong} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default App;
