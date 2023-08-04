import { useState } from 'react';
import { NavLink, Link } from "react-router-dom"


export default function Nav({ games }) {
  const [open, setOpen] = useState(false);


  console.log(open)

  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <nav>
      <div className="navList">
        <NavLink className="navLink" to="/">Home</NavLink>
        <div className="dropdown">
          <button className="navLink" onClick={handleOpen}>Games</button>
          {open ? (
            <ul className="menu">
              {games.map((game) => (
                <Link to={`/games/${game._id}`}>
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