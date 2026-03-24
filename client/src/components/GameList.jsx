function GameList({ games, onDelete, onEdit }) {
  if (games.length === 0) {
    return <p className="empty">No games yet. Add one above!</p>
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <div key={game._id} className={`game-card ${game.status.toLowerCase().replace(/ /g, '-')}`}>
          <div className="game-info">
            <h2>{game.title}</h2>
            <p>🎮 {game.platform}</p>
            <p>📌 {game.status}</p>
            {game.rating && <p>⭐ {game.rating}/10</p>}
            {game.notes && <p>📝 {game.notes}</p>}
          </div>
          <div className="game-actions">
            <button onClick={() => onEdit(game)}>Edit</button>
            <button onClick={() => onDelete(game._id)} className="delete">Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GameList