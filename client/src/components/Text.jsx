
import React from 'react';
import Github from '../../../Assets/github.svg'

module.exports = {

  Spotifight: () => { return (<div>Pick a song and battle your friends  in multiplayer minigames. Emerge the victor, and your song is played. (created with Socket.io) <p>  <a  href="https://github.com/michaelwachell" target="_blank"> <img className="nested-img" src={Github}/> </a></p>   </div>) },
  Visual: () => { return ( <p >See and move.</p>) },
  Comp: () => { return (<p> Sounds, loud and soft.</p>) },
  Lwn: () => { return (<p>Coming soon...</p>) },
  Tic: () => { return (<p>Who needs a framework? Enjoy this relaxing (100% vanilla JS/CSS/HTML) version of a "fun" classic</p>) },



}
