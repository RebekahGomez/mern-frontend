import { NavLink } from "react-router-dom"
import { NavItems } from "./NavItems"

export default function Nav() {
  return (
    <nav>
      <div className="navList">
        {NavItems.map((item, index) => {
          return (
            <div key={index}>
              <NavLink className="navLink" to={item.url}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

