import './App.css';
import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import GameDetail from './screens/GameDetail.jsx';
import Create from './screens/Create.jsx';
import Edit from './screens/Edit.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameDetail />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>

    </div>
  );
}

export default App;
