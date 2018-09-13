import React, { Component } from 'react';
import '../CSS/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <div className='jumbo'>
          <div className='menu'>
            <div className='menuBtn' id='roomMode'>
              <h1>Play Room Mode</h1>
            </div>
            <div className='menuBtn'>
              <img className='mapIcon' alt='mapLogo' src={process.env.PUBLIC_URL + '/images/map.svg'}/>
              <h1>Map Mode</h1>
            </div>
            <div className='menuBtn'>
              <img className='customIcon' alt='gear' src={process.env.PUBLIC_URL + '/images/settings.svg'}/>
              <h1>Custom</h1>
            </div>
            <div className='menuBtn support'>
              <img alt='heart' className='heart' src={process.env.PUBLIC_URL + '/images/like.svg'}/>
              <h1>Support the Dev</h1>
            </div>
          </div>
        <img className='logo' alt='6logo' src={process.env.PUBLIC_URL + '/images/6logo.png'}/>
        </div>
      </div>
    );
  }
}

export default Home;
