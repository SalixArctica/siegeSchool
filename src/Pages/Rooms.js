import React, { Component } from 'react';
import '../CSS/Rooms.scss';

let imgUrl = process.env.PUBLIC_URL + '/images/rooms/';

class Room extends Component {
  constructor() {
    super();
    this.state = {
      guess: '',
      map: 'Oregon',
      answer: 'Workshop',
      rooms: {
        Oregon: [
          'workshop',
          'bedroom',
          'bunks'
        ],
        Consulate: [
          'servers',
          'lobby',
          'spiral'
        ]
      }
    }
  }

  render() {
    return (
      <div className='Room'>
        <h1 className='mapName'>{this.state.map}</h1>
        <img className='roomPic' alt='roomPic' src={imgUrl + 'Oregon/2.jpg'} />
        <div className='guessDiv'>
          <input type='text' className='guess' value={this.state.guess}
            onChange={(evt) => this.setState({guess: evt.target.value})}
            placeholder='Guess the Callout'
          />
          <button className='submit'>Submit</button>
        </div>
      </div>
    );
  }
}

export default Room;
