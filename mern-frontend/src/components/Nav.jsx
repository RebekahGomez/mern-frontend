import { useState } from 'react';
import { NavLink, Link } from "react-router-dom"
import { NavItems } from "./NavItems"

export default function Nav({ games }) {
  const [open, setOpen] = useState(false);

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
                  <li className="menu-item">
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

// {NavItems.map((item, index) => {
//   return (
//     <div key={index}>
//       <NavLink className="navLink" to={item.url}>{item.title}</NavLink>
//     </div>
//   )
// })}