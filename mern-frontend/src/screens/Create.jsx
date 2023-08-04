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

  return (
    <div>
      <h1>Add your own game to the database</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add your game's name"
          name="name"
          value={game.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Type of game"
          name="type"
          value={game.type}
          onChange={handleChange}
        />
        <input
          type="url"
          placeholder="Add an image of your game"
          name="image"
          value={game.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="What is the rating?"
          name="rating"
          value={game.rating}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="0"
          name="price"
          value={game.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="What gaming system is this for?"
          name="system"
          value={game.system}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Please add a description of your game"
          name="description"
          value={game.description}
          onChange={handleChange}
        />
        <button type="submit">Submit Your Changes</button>
      </form>
    </div>
  )
}
