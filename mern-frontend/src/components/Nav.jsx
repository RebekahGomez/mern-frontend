import { useState } from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom"
import { createGame } from "../services/functions"


export default function Nav({ games }) {
  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  async function handleCreate() {
    await createGame();
    navigate("/create");
  }

  return (
    <nav>
      <div className="navList">
        <NavLink className="navLink" to="/">Home</NavLink>
        <div className="dropdown">
          <button className="navLink" onClick={handleOpen}>Games</button>
          {open ? (
            <ul className="menu">
              {games.map((game) => (
                <Link className='menu-item' to={`/games/${game._id}`}>
                  <li className="menu-item" onClick={handleOpen}>
                    {game.name}
                  </li>
                </Link>
              ))}
            </ul>
          ) : null}
        </div>
        <NavLink className="navLink" to="/create">Add Game</NavLink>
      </div>
    </nav>
  )
}