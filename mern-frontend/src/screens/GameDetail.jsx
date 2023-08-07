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
    <div className="pageContainer">
      <div className="game-detail">
        <h3>{game.name}</h3>
        <div className="game-items">
          <img src={game.image} alt={game.name} />
          <div className="game-p-tags">
            <p>{game.type}</p>
            <p>Rated: {game.rating}</p>
            <p>${game.price}</p>
            <p>System compatability: {game.system}</p>
            <p>{game.description}</p>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <Link to={`/games/${id}/edit`}>
          <button className="editDeleteButton">Edit Game</button>
        </Link>
        <button className="editDeleteButton" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

