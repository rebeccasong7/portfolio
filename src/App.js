import React, { Component } from 'react';
import './App.css';
import Movie from './features/Movie/index';
import InputText from './shared/components/InputText/index'


const movie = [
  {
    title: 'ready player one',
    poster: 'http://sm.ign.com/ign_jp/review/r/ready-play/ready-player-one-review_fyc1.jpg' },
    {
      title: 'matrix',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jMT2KVyuM6qMjeuyuJugg962ahFv62ee3HO4VbIZcj3q2Sq2'
    },
    {
      title: 'up',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8F-fx5DCzmfpalo-gFFf9kBaF42q4PWvU9CmEeR-0RGBTXJ7Q'
    },
    {
      title: 'inside out',
      poster: 'https://lumiere-a.akamaihd.net/v1/images/takeover_insideout_b602f36b.jpeg?region=0,0,2048,856'
    }

  ]

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <h1>Movie</h1>
        {
          movie.map((movie, index) =>
          <Movie title={movie.title} poster={movie.poster} key={index}/>)
        }
        <InputText />

      </div>
    );
  }
}

export default App;
