import React from 'react';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messeges</div>
        <div>News</div>
        <div>Music</div>
        <div>Settings</div>
      </nav>
      <div className='content'>
        <div className='content-img-bg'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNl83-Gff4Wev5w1sXepNoGSfHcwGkMFnyTStiT8o2pHC5LXjj&usqp=CAU' />
        </div>
        <div className='content-img-avatar'>
          <img src='https://st3.depositphotos.com/5366154/13886/i/450/depositphotos_138866008-stock-photo-fire-letter-v-of-burning.jpg' />
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
        </div>
      </div>
    </div>

  );
}






export default App;


