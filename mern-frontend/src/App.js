import './App.css';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import GameDetail from './screens/GameDetail.jsx';
import Create from './screens/Create.jsx';
import Edit from './screens/Edit.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getGames } from './services/functions.js';

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetchGames()
  }, [])

  async function fetchGames() {
    const gamesData = await getGames()
    setGames(gamesData)
  }

  return (
    <div className="App">
      <Nav games={games} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games/:id" element={<GameDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/games/:id/edit" element={<Edit />} />
      </Routes>

    </div>
  );
}

export default App;
