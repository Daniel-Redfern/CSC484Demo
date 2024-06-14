import { Route, Routes } from "react-router-dom";
import './App.css';
import Help from './Help.js'
import HomePage from './HomePage.js'
import Profile from './Profile.js'
import ViewPage from './ViewPage.js'
import { useState } from "react";

function App() {

  const data = {
    Bicycle: {img: 1, title: 'Bicycle', cost: '$5/Day', owner: 'Dave K.', description: 'This is my old mountain bicycle, Its a quality mountain bike great for both traditional outdoors courses and just daily rides around the city.'},
    Crockpot: {img: 2, title: 'Crockpot', cost: '$5/Day', owner: 'Dave K.', description: 'This crockpot is perfect for anyone trying to get into cooking.'},
    Dress: {img: 3, title: 'Wedding Dress', cost: '$25/Day', owner: 'Dave K.', description: 'This is my old wedding dress. I made fantastic memories with it and I\'m hoping someone else is able to get the same joy from it that I had.'},
    Golf: {img: 4, title: 'Golf Clubs', cost: '$15/Day', owner: 'Dave K.', description: '12 Club set of golf clubs. The bag comes with wheels so its easier to roll around if you don\' want to carry it. It comes with 2 putter, a driver, a sandwedge and a variety of other clubs.'},
    Guitar: {img: 5, title: 'Acustic Guitar', cost: '$8/Day', owner: 'Dave K.', description: 'This is a handcrafted acustic guitar perfect for creating all of your favorite tunes.'},
    Lawnmower: {img: 6, title: 'Lawnmower', cost: '$10/Day', owner: 'Dave K.', description: 'This is a john-deere ride along lawnmower. It makes mowing your lawn soooo much easier.'},
    Pool: {img: 7, title: 'Pool Cleaner', cost: '$7/Day', owner: 'John B.', description: 'This is a pool cleaner. Just set it in the pool and let it go. It will clean out all of the loose debris in the pool.'},
    Projector: {img: 8, title: 'Movie Projector', cost: '$6/Day', owner: 'John B.',  description: 'This projector is great for whatever you want, whether it is a movie night or just to play games on a big screen with friends.'},
    Xbox: {img: 9, title: 'Xbox', cost: '$5/Day', owner: 'John B.', description: 'This is an Xbox, what more do I need to say?'}
  }

  const [selectedData, setSelectedData] = useState()

  return (
    <div style={{margin: 0}}>
      <Routes>
        <Route path="/" element={
          <HomePage data={data} setSelected={setSelectedData}
            />} />
        <Route path="/Help" element={ <Help/> } />
        <Route path="/Profile" element={ <Profile/> } />
        <Route path="/ViewPage" element={
        <ViewPage
          data={selectedData}
        />} />
        <Route path="*" element={<Help/>} />
      </Routes>
    </div>
  );
}

export default App;
