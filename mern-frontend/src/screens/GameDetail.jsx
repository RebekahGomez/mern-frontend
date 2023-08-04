import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getGame, deleteGame } from "../services/functions";

export default function GameDetail({ setToggle }) {
  const [game, setGame] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetchGame();
  }, [id]);

  async function fetchGame() {
    const game = await getGame(id);
    setGame(game);
  }

  async function handleDelete() {
    await deleteGame(id);
    setToggle((prev) => !prev);
    navigate("/");
  }

  return (
    <div className="game-detail">
      <h3>{game.name}</h3>
      <p>{game.type}</p>
      <img src={game.image} alt={game.name} />
      {/* // I want this part to be an icon image */}
      <p>Rated: {game.rating}</p>
      <p>${game.price}</p>
      <p>{game.system}</p>
      <p>{game.description}</p>
      <div>
        <Link to={`/games/${id}/edit`}>
          <button>Edit Game</button>
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

