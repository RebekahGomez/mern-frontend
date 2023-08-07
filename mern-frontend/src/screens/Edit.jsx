import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateGame, getGame } from "../services/functions"

export default function GameEdit() {

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

  useEffect(() => {
    fetchGame()
  }, [])

  async function fetchGame() {
    const oneGame = await getGame(id)
    setGame(oneGame)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateGame(id, game)
    navigate(`/games/${id}`)
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
    <div className="pageContainer">
      <form className="create-form" onSubmit={handleSubmit}>
        <h1 className="create-h1">Edit this game</h1>
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
  )
}
