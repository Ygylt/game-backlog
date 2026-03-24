import { useState, useEffect } from 'react'

function GameForm({ onSubmit, editingGame, onCancel }) {
  const [form, setForm] = useState({
    title: '', platform: '', status: 'Want to Play', rating: '', notes: ''
  })

  useEffect(() => {
    if (editingGame) setForm(editingGame)
  }, [editingGame])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    setForm({ title: '', platform: '', status: 'Want to Play', rating: '', notes: '' })
  }

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <input name="title" placeholder="Game title" value={form.title} onChange={handleChange} required />
      <input name="platform" placeholder="Platform (PS5, PC...)" value={form.platform} onChange={handleChange} required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Want to Play</option>
        <option>Playing</option>
        <option>Completed</option>
        <option>Dropped</option>
      </select>
      <input name="rating" type="number" placeholder="Rating (1-10)" min="1" max="10" value={form.rating} onChange={handleChange} />
      <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit">{editingGame ? 'Update Game' : 'Add Game'}</button>
      {editingGame && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  )
}

export default GameForm