import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createGame, getGame } from "../services/functions"

export default function GameCreate({ setToggle }) {

  const [game, setGame] = useState({
    name: "",
    type: "",
    image: "",
    rating: "",
    price: "",
    system: "",
    description: "",
  })

  let { id } = useParams()
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createGame(game)
    setToggle((prev) => !prev)
    navigate(`/`)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setGame((prevGame) => ({
      ...prevGame,
      [name]: value
    }))
  }

  const types = ["action", "adventure", "racing", "role-playing", "sports"]
  const ratings = ["everyone", "teen", "mature"]
  const systems = ["all", "PlayStation", "Xbox", "Switch", "PC"]

  return (
    <div>

      <div className="pageContainer">
        <form className="create-form" onSubmit={handleSubmit}>
          <h1 className="create-h1">Add your own game to the database</h1>
          <input className="create-input"
            type="text"
            placeholder="Game's name"
            name="name"
            value={game.name}
            onChange={handleChange}
          />

          <select
            value={game.type}
            name="type"
            onChange={handleChange}>
            <option value="" disabled>Type</option>
            {types.map((type, index) => (
              <option className="options"
                value={type}
                key={index}>{type}</option>))}
          </select>

          <input className="create-input"
            type="url"
            placeholder="Image URL"
            name="image"
            value={game.image}
            onChange={handleChange}
          />

          <select
            value={game.rating}
            name="rating"
            onChange={handleChange}>
            <option value="" disabled>Rating</option>
            {ratings.map((rating, index) => (
              <option className="options"
                value={rating}
                key={index}>{rating}</option>))}
          </select>

          <input className="create-input"
            type="number"
            placeholder="Price"
            name="price"
            value={game.price}
            onChange={handleChange}
          />

          <select
            value={game.system}
            name="system"
            onChange={handleChange}>
            <option value="" disabled>Gaming System</option>
            {systems.map((system, index) => (
              <option className="options"
                value={system}
                key={index}>{system}</option>))}
          </select>

          <input className="create-input"
            type="text"
            placeholder="Game description"
            name="description"
            value={game.description}
            onChange={handleChange}
          />
          <button type="submit">Submit Your Changes</button>
        </form>
      </div>
      /</div>
  )
}
