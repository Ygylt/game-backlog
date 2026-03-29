import { useState, useEffect } from 'react'
import axios from 'axios'
import GameList from './components/GameList'
import GameForm from './components/GameForm'
import './App.css'

const API = 'https://game-backlog-1.onrender.com/api/games'

function App() {
  const [games, setGames] = useState([])
  const [editingGame, setEditingGame] = useState(null)

  const fetchGames = async () => {
    const res = await axios.get(API)
    setGames(res.data)
  }

  useEffect(() => {
    fetchGames()
  }, [])

  const addGame = async (game) => {
    await axios.post(API, game)
    fetchGames()
  }

  const updateGame = async (id, game) => {
    await axios.put(`${API}/${id}`, game)
    setEditingGame(null)
    fetchGames()
  }

  const deleteGame = async (id) => {
    await axios.delete(`${API}/${id}`)
    fetchGames()
  }

  return (
    <div className="app">
      <h1>🎮 Game Backlog</h1>
      <GameForm
        onSubmit={editingGame ? (data) => updateGame(editingGame._id, data) : addGame}
        editingGame={editingGame}
        onCancel={() => setEditingGame(null)}
      />
      <GameList games={games} onDelete={deleteGame} onEdit={setEditingGame} />
    </div>
  )
}

export default App