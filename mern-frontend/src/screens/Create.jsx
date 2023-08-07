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
      <h1 className="create-h1">Add your own game to the database</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Game's name"
          name="name"
          value={game.name}
          onChange={handleChange}
        />

        <select
          value={game.type}
          onChange={handleChange}>
          {types.map((type, index) => (
            <option className="options"
              value={type}
              key={index}>{type}</option>))}
        </select>

        <input
          type="url"
          placeholder="Image URL"
          name="image"
          value={game.image}
          onChange={handleChange}
        />

        <select
          value={game.rating}
          onChange={handleChange}>
          {ratings.map((rating, index) => (
            <option className="options"
              value={rating}
              key={index}>{rating}</option>))}
        </select>

        <input
          type="number"
          placeholder="Price"
          name="price"
          value={game.price}
          onChange={handleChange}
        />

        <select
          value={game.system}
          onChange={handleChange}>
          {systems.map((system, index) => (
            <option className="options"
              value={system}
              key={index}>{system}</option>))}
        </select>

        <input
          type="text"
          placeholder="Game description"
          name="description"
          value={game.description}
          onChange={handleChange}
        />
        <button type="submit">Submit Your Changes</button>
      </form>
    </div >
  )
}
